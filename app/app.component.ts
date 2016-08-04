import { Component } from '@angular/core';
import { NavComponent } from './components/nav.component';
import { CardComponent } from './components/card.component';


@Component({
    selector: 'my-app',
    template: ` <nav-comp></nav-comp>
              <h1 class="text-center">Wellcome to Angular 2 App</h1>
              <div class="row" style="padding: 0px 50px ">
                  <card-comp></card-comp>
              </div>`,
    directives: [NavComponent , CardComponent]

})
export class AppComponent { }