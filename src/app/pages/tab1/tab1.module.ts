import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
// 引入commen 组件 需引入：
import {ComponentsModule} from "../../components/components.module"; // 自定义组件

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: Tab1Page}]),
        ComponentsModule,// 自定义组件
    ],
    declarations: [Tab1Page]
})
export class Tab1PageModule {
}
