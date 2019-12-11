import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {DetailModule} from "./pages/detail/detail.module";
import { Detail } from './pages/detail/detail';
import {CeshiModule} from "./pages/detail/ceshi/ceshi.module";
import {SonModule} from "./pages/detail/son/son.module";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
    }, {
        path: 'detail',
        loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
    },{
        path: 'ceshi',
        loadChildren: () => import('./pages/detail/ceshi/ceshi.module').then(m => m.CeshiModule)
    },{
        path: 'son',
        loadChildren: () => import('./pages/detail/son/son.module').then(m => m.SonModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
