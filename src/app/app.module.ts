import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageRadioGroupComponent } from './image-radio-group/image-radio-group.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ImageRadioGroupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
