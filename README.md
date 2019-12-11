# three

> A ionic project



``` bash
自定义组件：
    新建 components 文件夹，下面创建组件 commen 和 zizujian01
    components 内创建一个 components.module.ts 要引入组件 commen 和 zizujian01

    1. app.module.ts 引入 components.module;

    2.在tab1.page.html 引入组件 commen 和 zizujian01
        1)tab1.page.html 写入：
          <app-commen></app-commen>
          <app-zizujian01></app-zizujian01>

        2) tab1.module.ts内写入 ：
        import {ComponentsModule} from "../../components/components.module"; // 自定义组件
        imports:[ComponentsModule]


 页面跳转带参：
    1、tab1.page.ts内写入 ：
    import { Router } from '@angular/router';
    this.router.navigate(["./detail/detail"], {
        queryParams: {
           id: "123",
           name: '小明'
        }
    })
    2、detail.ts写入：
    import { Router, ActivatedRoute, Params } from '@angular/router';
    this.activeRoute.snapshot.queryParams['id'];
    this.activeRoute.snapshot.queryParams['name'];

```
