/**
 * Created by moti Gadian on 04/08/16.
 */


import { Component } from '@angular/core';

@Component({
    selector: 'card-comp',
    templateUrl: 'app/templates/card/card.html'
    //styleUrl : 'app/templates/nav/nav-comp.css'
})


export class CardComponent {
    Card= {header:"card1", img:"app/assets/programming.jpg" , content: "this is a simple card"}


}
