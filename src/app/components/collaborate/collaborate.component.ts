import { Component } from '@angular/core';

@Component({
  selector: 'app-collaborate',
  templateUrl: './collaborate.component.html',
  styleUrls: ['./collaborate.component.css'],
})
export class CollaborateComponent {
  accordionTab = 1;
  accordion2Tab = 1;
  accordion3Tab = 1;


  constructor() { 
 
    console.log(this.accordionTab);
    

  }

  accTab(){
    console.log(this.accordionTab);
  }


}

