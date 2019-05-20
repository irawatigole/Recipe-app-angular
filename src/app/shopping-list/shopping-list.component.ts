import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from './shopping-list.service';

import { Store } from '@ngrx/store';
// import * as fromShoppingList from './store/shopping-list.reducers';
import * as ShoopingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducers';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>
  // private subscription: Subscription;

  constructor(
              // private sLService: ShoppingListService,
              // private store: Store<{shoppingList: {ingredients: Ingredient[]}}>
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // this.ingredients = this.sLService.getIngredients();
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.sLService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[] ) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }
  onEditItem(index: number){
    // this.sLService.startedEditing.next(index);
    this.store.dispatch(new ShoopingListActions.StartEdit(index));
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
  

}