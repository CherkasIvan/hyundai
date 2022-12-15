import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, Observable, Subject, switchMap, tap } from 'rxjs';
import { MenuItem } from '../producer-menu/menu.interface';

const ESAY_BACK_FILTER_TAB_TABLE_ID = 'table-nav-top';

class Store {
  items: MenuItem[] = [];
}

@Injectable()
export class ToolbarStore extends ComponentStore<Store> {
  public items$: Observable<MenuItem[]> = this.select((state) => state.items);

  public updateConfig$ = new Subject<void>();

  constructor(
    // private easyBackStorageService: EasyBackStorageService,
    // private snackBar: SnackBarService
  ) {
    super(new Store());
    // this.getTables();
  }

  // private getTables = this.effect((origin$: Observable<void>) => {
  //   return origin$.pipe(
  //     switchMap(() =>
  //       this.easyBackStorageService.find<any>({
  //         filter: { id: ESAY_BACK_FILTER_TAB_TABLE_ID },
  //       })
  //     ),
  //     tap((table: any) => {
  //       console.log(table);
  //       this.patchState({
  //         items: table?.rows[0]?.payload?.content || [],
  //       });
  //       this.updateConfig$.next();
  //     }),
  //     catchError((e) => {
  //       console.error(e);
  //       this.snackBar.openWarnMessage('Ошибка получения таблицы навигации');
  //       return origin$;
  //     })
  //   );
  // });
}