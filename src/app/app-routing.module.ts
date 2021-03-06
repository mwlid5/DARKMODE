import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'logueado/:oscuro',
    loadChildren: () => import('./logueado/logueado.module').then( m => m.LogueadoPageModule)
  },
  {
    path: 'ajustes/:oscuro',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'vincular/:oscuro',
    loadChildren: () => import('./vincular/vincular.module').then( m => m.VincularPageModule)
  },
  {
    path: 'multiarticulo/:oscuro',
    loadChildren: () => import('./multiarticulo/multiarticulo.module').then( m => m.MultiarticuloPageModule)
  },
  {
    path: 'detalleset/:oscuro',
    loadChildren: () => import('./detalleset/detalleset.module').then( m => m.DetallesetPageModule)
  },
  {
    path: 'desvincular/:oscuro',
    loadChildren: () => import('./desvincular/desvincular.module').then( m => m.DesvincularPageModule)
  },
  {
    path: 'articulosord/:oscuro',
    loadChildren: () => import('./articulosord/articulosord.module').then( m => m.ArticulosordPageModule)
  },
  {
    path: 'invertida/:oscuro',
    loadChildren: () => import('./invertida/invertida.module').then( m => m.InvertidaPageModule)
  },
  {
    path: '**/:oscuro',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
