import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `
  {{result}}
  `,
  styles: []
})
export class PropertyBindingComponent  {

  @Input() result: number = 0;

}

/*

IT IS THE SAME (see Inputs in component)
--------------

import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `
  {{result}}
  `,
  styles: [],
  inputs: ['result']
})
export class PropertyBindingComponent  {

   result: number = 0;

}


*/