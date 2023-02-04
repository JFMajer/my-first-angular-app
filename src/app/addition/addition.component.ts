import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  x: string;
  y: string;
  result: number;

  addNumbers() {
    //convert x and y to numbers and add
    this.result = parseInt(this.x) + parseInt(this.y);
    console.log(this.result);
  }

  onUpdateX(event: Event) {
    this.x = (<HTMLInputElement>event.target).value;
    console.log(this.x);
  }

  onUpdateY(event: Event) {
    this.y = (<HTMLInputElement>event.target).value;
    console.log(this.y);
  }
}
