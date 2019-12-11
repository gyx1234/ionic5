import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Zizujian01Component} from "./zizujian01/zizujian01.component";
import {Commen} from "./commen/commen";

@NgModule({
    declarations: [Zizujian01Component,Commen],
    imports: [CommonModule],
    exports:[Zizujian01Component,Commen],
})
export class ComponentsModule {
}