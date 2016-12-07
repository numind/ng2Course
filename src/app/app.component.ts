
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>ciao come va!</h1>
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
    <p #boundContent>{{test}}</p>
    </fa-lifecycle>
    <button (click)="delete = true">Click to delete</button>
    <button (click)="test = 'changed value'">Click to change content</button>
    <button (click)="boundValue = 2000">Click to change binding</button>
    `
})

export class AppComponent {
  title = 'app works! ... I chaged it!';
  delete = false;
  test = 'Starting value';
  boundValue = 1000;
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
