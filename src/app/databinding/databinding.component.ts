import { Component } from '@angular/core';
import {PropertyBindingComponent} from './property-binding.component';
import {EventBindingComponent} from './event-binding.component';
import {TwoWayBindingComponent} from './two-way-binding.component';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  stringInterpolation = "this is string interpol";
  numberInterpolation = 2;

  onTest = function(){
      return true;
  }

  onClicked(value: String){

  	alert(value);

  }

}
