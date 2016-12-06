
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>ciao come va!</h1>
    <fa-lifecycle *ngIf="!delete"></fa-lifecycle>
    <button (click)="delete = true">Click to delete</button>
    `
})

export class AppComponent {
  title = 'app works! ... I chaged it!';
  delete = false;
}

// styleUrls: ['./app.component.css']
// templateUrl: './app.component.html',

/* FIRST EXERCISE
-----------------

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>ciao come va!</h1>
    <fa-databinding></fa-databinding>
    `
})

export class AppComponent {
  title = 'app works! ... I chaged it!';
}


*/