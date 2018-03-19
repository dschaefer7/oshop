import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) {
  }

  getCategories() {
    return this.db.list('/categories', ref => {
        return ref.orderByChild('name');
      }
    ).snapshotChanges()
      .map(actions => {
        return actions.map(action => ({key: action.key, ...action.payload.val()}));
      });
  }


}
