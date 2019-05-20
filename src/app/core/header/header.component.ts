import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
// import { DataStorageService } from '../../shared/data-storage.service';
// import { Response } from '@angular/http';
// import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';
import * as AuthActions from '../../auth/store/auth.actions';
// import { HttpEvent, HttpEventType } from '@angular/common/http';
import * as RecipeActions from '../../recipes/store/recipe.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    authState: Observable<fromAuth.State>;
    constructor(
                // private dataStorageService: DataStorageService,
                // private authService: AuthService,
                private store: Store<fromApp.AppState>){}
    // @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }
    ngOnInit() {
        this.authState = this.store.select('auth');
      }
    onSaveData(){
        // this.dataStorageService.storeRecipes().subscribe(
        //     (response) => {
        //         // console.log(response.type === HttpEventType.Response);
        //         console.log(response);
        //     }
        // );
        this.store.dispatch(new RecipeActions.StoreRecipes());
    }
    onFetchData() {
        // this.dataStorageService.getRecipes();
        this.store.dispatch(new RecipeActions.FetchRecipes());
    }
    onLogout(){
       // this.authService.logout();
        this.store.dispatch(new AuthActions.Logout());
    }
}