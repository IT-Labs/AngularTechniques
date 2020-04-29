import { Component, OnInit } from '@angular/core';

@Component({ 
  templateUrl: './component-directive.component.html',
})
export class ComponentDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  step = 0;
  
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
}
