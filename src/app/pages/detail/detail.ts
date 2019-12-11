import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.html',
  styleUrls: ['detail.scss']
})
export class Detail {

  constructor(
      private router: Router,
      public activeRoute: ActivatedRoute,
  ) {
      // 获取 detail 携带的参数
      var id = this.activeRoute.snapshot.queryParams['id'];
      console.log('获取 detail 携带的参数 id，', id)
  }
    onclick(){
        console.log('detial')
        this.router.navigate(["./ceshi/ceshi"])
    }
}
