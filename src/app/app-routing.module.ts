import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'songslist',
    loadChildren: () => import('./songslist/songslist.module').then( m => m.SongslistPageModule)
  },
  {
    path: 'devinfo',
    loadChildren: () => import('./devinfo/devinfo.module').then( m => m.DevinfoPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'chooselang',
    loadChildren: () => import('./chooselang/chooselang.module').then( m => m.ChooselangPageModule)
  },
  {
    path: 'choose-artist',
    loadChildren: () => import('./choose-artist/choose-artist.module').then( m => m.ChooseArtistPageModule)
  },
  {
    path: 'home-tabs',
    loadChildren: () => import('./home-tabs/home-tabs.module').then( m => m.HomeTabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
