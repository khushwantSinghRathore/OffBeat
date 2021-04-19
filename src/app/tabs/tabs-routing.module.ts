import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'home-tabs',
        children:[
          {
            path: '',
            loadChildren: () => import('../home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule),
          }
        ]
       
       // pathMatch: 'full'
      },
      {
        path: 'search-tabs',
        children: [
          {
            path: '',
            loadChildren: () => import('../search-tabs/search-tabs.module').then(m => m.SearchTabsPageModule),
          }
        ]
        
       // pathMatch: 'full'
      },
      {
        path: 'radio-tabs',
        children: [
          {
            path: '',
            loadChildren: () => import('../radio-tabs/radio-tabs.module').then(m => m.RadioTabsPageModule),
          }
        ]
        //pathMatch: 'full'
      },
      {
        path: 'playlist-tabs',
        children: [
          {
            path: '',
            loadChildren: () => import('../playlist-tabs/playlist-tabs.module').then(m => m.PlaylistTabsPageModule),
          }
        ]
       // pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/tabs/home-tabs',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home-tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
