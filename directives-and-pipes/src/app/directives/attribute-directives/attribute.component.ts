import { Component, OnInit } from '@angular/core';

@Component({ 
  templateUrl: './attribute.component.html',
})
export class AttributeComponent implements OnInit {

  data = ['test1','test2','test3','test4']
  constructor() { }

  ngOnInit() {
  }

}
