import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
      private router: Router
  ) {
    console.log('tab1')
  }

  onclick() {
    console.log('点击跳转 ')
    this.router.navigate(["./detail/detail"], {
        queryParams: {
            id: "123",
            name: '小明'
        }
    })
  }
}
