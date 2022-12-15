import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: () => import('../app/core/auth/auth.module')
  //     .then(module => module.AuthModule)
  // },
  // { path: 'main', loadChildren: () => import('../app/core-pages/main-container-page/main-container-page.module')
  //     .then(module => module.MainContainerPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
