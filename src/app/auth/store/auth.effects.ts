import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import { map, tap, switchMap, mergeMap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/do';
import { from } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$.pipe(ofType(AuthActions.TRY_SIGNUP)).pipe(map((action: AuthActions.TrySignup) => {
        return action.payload;
    }),
    switchMap((authData: {username: string, password: string}) => {
        return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    }),
    switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
    }),
    mergeMap((token: string) => {   
        return [
            {
                type: AuthActions.SIGNUP
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ]
    }));
    @Effect()
    authSignin = this.actions$.pipe(ofType(AuthActions.TRY_SIGNIN)).pipe(map((action: AuthActions.TrySignup) => {
        return action.payload;
    }),
    switchMap((authData: {username: string, password: string}) => {
        return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
    }),
    switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
    }),
    mergeMap((token: string) => {
        this.router.navigate(['/']);
        return [
            {
                type: AuthActions.SIGNIN
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ]
    }));
    @Effect({dispatch: false})
    authLogout = this.actions$.pipe(ofType(AuthActions.LOGOUT)).pipe(tap(() => {
        this.router.navigate(['/']);
    }));
    constructor(private actions$: Actions, private router: Router){}
}