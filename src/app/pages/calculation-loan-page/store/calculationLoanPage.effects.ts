import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap } from "rxjs";
import { ClientDataService } from "src/app/shared/services/client-data.service";
import { PersistenceService } from "src/app/shared/services/persistence.service";
import { getCarOptionsAction, setCarOptionsAction } from "./calculationLoanPage.action";

@Injectable()
export class CalcultionLoanPageEffects {
    constructor ( private _actions$: Actions,
                  private _clientDataService: ClientDataService,
                  private _persistenceService: PersistenceService) {
    }

    public getCarOptions$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getCarOptionsAction),
      switchMap(({ clientId }) => {
        return this._clientDataService.getClientCars(clientId).pipe(
          switchMap( async (carOptions) =>{
            return setCarOptionsAction({carOptions});
          }),
        );
      })
    )
  );
}
