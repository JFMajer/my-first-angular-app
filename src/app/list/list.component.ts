import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listOfUsers = [
    {name: 'Max', age: 27, status: 'active'},
    {name: 'Anna', age: 24, status: 'inactive'},
    {name: 'Chris', age: 25, status: 'active'},
    {name: 'Manu', age: 26, status: 'inactive'}
  ];

  userName = '';
  userAge : number;
  userStatus : string;
  showUsersVar : boolean = false;
  
  addUser() {
    this.listOfUsers.push({name: this.userName, age: this.userAge, status: this.userStatus});
    this.userName = '';
  }

  showUsers() {
    this.showUsersVar = true;
  }

  hideUsers() {
    this.showUsersVar = false;
  }

  // return backroung color based on user status
  getColor(status: string) {
    return status === 'active' ? 'blue' : 'red';
  }

}
