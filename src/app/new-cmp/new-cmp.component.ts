import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})

export class NewCmpComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/Projects');
  }


  ngOnInit() {
  }

}
