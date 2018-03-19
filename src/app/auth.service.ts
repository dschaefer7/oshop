import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {AppUser} from './models/app-user';
import {UserService} from './user.service';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private userService: UserService,
              private afAuth: AngularFireAuth,
              private route: ActivatedRoute,
              private router: Router) {
    this.user$ = this.afAuth.authState;
  }


  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    // .then(() => {
    //   this.router.navigateByUrl('www.google.com');
    // });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) {
          return this.userService.get(user.uid).valueChanges();
        }
        return Observable.of(null);
      });
  }
}
