import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from './components/card/card.component';
//import { Login } from './components/login/login.component';

import { ROUTER_DIRECTIVES } from '@angular/router';




@Component({
    selector: 'my-app',
    template: ` <nav-comp></nav-comp>
              <h1 class="text-center">Wellcome to Angular 2 App</h1>
              <ul>
              <li><a routerLink="login" >Login</a></li>
              <li> <a routerLink='' >home</a></li>
              </ul>
         
              
               <div class="row" style="padding: 0px 50px ">
                 
                 <router-outlet></router-outlet>
              </div>       `,
    directives: [NavComponent ,ROUTER_DIRECTIVES]

})
export class AppComponent {
   /* constructor(private router :Router ){}

    ngOnInit(){
        this.router.navigate(['/']);
    }*/
}