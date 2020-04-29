import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {

  @Input() results;
 
  step = 0;
  @ContentChild('contentTemplate', {static: false}) contentTemplateRef: TemplateRef<any>;
  
  constructor(private router: Router) { }
  ngOnInit(): void {

  }

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
