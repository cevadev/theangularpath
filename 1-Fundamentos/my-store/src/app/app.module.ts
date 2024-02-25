import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Fundamentos } from './fundamentos.clases';

@NgModule({
  declarations: [AppComponent, Fundamentos],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [Fundamentos],
})
export class AppModule {}
