import { Component, OnInit } from '@angular/core';

@Component({ 
  templateUrl: './custom.component.html',
})
export class CustomComponent implements OnInit {

  power = 5;
  factor = 1;
  
  constructor() { }

  ngOnInit() {
  }

}
