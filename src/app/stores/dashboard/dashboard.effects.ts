import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DashboardActions } from "./dashboard.actions";
import { catchError, concatMap, map, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { DashboardItem } from "../../domain/dashboard/dashboard.models";

@Injectable()
export class DashboardEffects {
    public fetchDashboardItems$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(DashboardActions.loadEnchantedItems), 
            concatMap(() => {
                return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
                    map(data => {
                        return DashboardActions.loadEnchantedItemsSuccess({ items: data as DashboardItem[] });
                    }),
                    catchError(() => of(DashboardActions.loadEnchantedItemsError({
                        error: 'something went wrong during the request, try to fetch your enchanted items a bit later'
                    })))
                  )
            })
        );
    });

    constructor(private readonly actions$: Actions, private readonly http: HttpClient) {}
}
