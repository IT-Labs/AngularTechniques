import { Component, OnInit } from '@angular/core';

@Component({ 
  templateUrl: './structural.component.html',
})
export class StructuralComponent implements OnInit {

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
