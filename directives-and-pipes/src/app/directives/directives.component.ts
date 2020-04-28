import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({ 
  templateUrl: './directives.component.html',
})
export class DirectivesComponent {
 
 
  background: ThemePalette = undefined;
   
  links = [
    {
      name: 'Attribute',
      navigationLink: './attribute',
      index: 0
    },
    {
      name: 'Structural',
      navigationLink: './structural',
      index: 1
    },
    {
      name: 'Components',
      navigationLink: './components',
      index: 2
    }
  ];

  activeLink = this.links[0].index;

  ngOnInit(): void {
    this.background = 'accent';
  }  
}
