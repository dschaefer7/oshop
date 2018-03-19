import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) {
  }


  canActivate(): Observable<boolean> {
    // return this.auth.user$
    //   .switchMap(user => {
    //     return this.userService.get(user.uid).valueChanges();
    //  })
    return this.auth.appUser$
      .map(appuser => appuser.isAdmin);

  }

}
