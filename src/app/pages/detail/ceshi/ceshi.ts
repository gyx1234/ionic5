import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Son} from "../son/son";


@Component({
  selector: 'app-ceshi',
  templateUrl: 'ceshi.html',
  styleUrls: ['ceshi.scss']
})
export class Ceshi {

    constructor(
        private router: Router
    ) {
    }

    onclick() {
        console.log('son')
        this.router.navigate(["./son/son"])
    }
}
