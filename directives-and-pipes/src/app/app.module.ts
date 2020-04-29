import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common'; 
import { AccordionComponent } from './accordion/accordion.component';
import { OnlyForSreenModule } from './directives/structural-directives/only-for-screen/only-for-screen.module';

@NgModule({
  declarations: [
    AppComponent,
    ...AppRoutingModule.components,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    OnlyForSreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
