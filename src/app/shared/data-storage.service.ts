// import { Injectable } from '@angular/core';
// // import { Http, Response } from '@angular/http';
// import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
// import { RecipeService } from '../recipes/recipe.service';
// import { Recipe } from '../recipes/recipe.model';
// import 'rxjs/Rx';
// // import { AuthService } from '../auth/auth.service';

// @Injectable()
// export class DataStorageService {
//     constructor(private httpClient: HttpClient, 
//                 private recipeService: RecipeService,
//                 // private authService: AuthService
//                 ){}    
//     storeRecipes(){
//         // const token = this.authService.getToken();
//         // const headers = new HttpHeaders().set('Authorization', 'Bearer gfbdgfhg');

//         // return this.httpClient.put('https://ng-recipe-book-67914.firebaseio.com/recipes.json', this.recipeService.getRecipes(), { observe: 'body', 
//         // params: new HttpParams().set('auth', token),
//         // // headers: headers
//     // });
//     const req = new HttpRequest('PUT', 'https://ng-recipe-book-67914.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress: true, 
//                                                     //  params: new HttpParams().set('auth', token)
//                                                     })
//     return this.httpClient.request(req);                                                 
//     }
//     getRecipes(){
//         // const token = this.authService.getToken();  
//         // this.httpClient.get<Recipe[]>('https://ng-recipe-book-67914.firebaseio.com/recipes.json?auth=' + token)
//         this.httpClient.get<Recipe[]>('https://ng-recipe-book-67914.firebaseio.com/recipes.json', { observe: 'body', responseType: 'json'})
//             .map(
//             (recipes) => {
//                 console.log(recipes);
//                 // const recipes: Recipe[] = response.json();
//                 for(let recipe of recipes){
//                     if(!recipe['ingredients']){
//                         // console.log(recipe);
//                         recipe['ingredients'] = [];
//                     }
//                 }
//                 return recipes;
//             }
//         ).subscribe(
//             (recipes: Recipe[]) => {  
//                 this.recipeService.setRecipes(recipes);
//             }
//         )
//     }
// }