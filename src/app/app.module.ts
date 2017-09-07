import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FaceComponent } from './face/face.component';
import { UpComponent } from './up/up.component';
import { Block3Component } from './block3/block3.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceComponent,
    UpComponent,
    Block3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
