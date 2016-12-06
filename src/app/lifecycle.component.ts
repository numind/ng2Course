import { 
    Component, 
    OnInit, 
    OnChanges, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked, 
    AfterViewInit,
    AfterViewChecked,
    OnDestroy } from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnChanges() {
    this.log('onChanges');
  }
  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }

}
