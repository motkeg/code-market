/**
 * Created by moti Gadian on 04/08/16.
 */

import { provideRouter, RouterConfig }  from '@angular/router';
import { Login } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';

export  const routes: RouterConfig = [

    { path: 'login', component: Login },
   { path: '', component: CardComponent }


];

export const appRouterProviders = [
    provideRouter(routes)
];