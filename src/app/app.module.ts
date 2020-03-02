import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HighlighttextDirective } from './directives/highlighttext.directive';
import { BasicService } from './services/basic.service';

@NgModule({
  // declaration option: used to define component in respective module
  declarations: [
    AppComponent,
    HomeComponent,
    HighlighttextDirective
  ],
  // import options : used to import other dependent module
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // provider options : used to add service which should Injected or be made availabe for throughout the app
  // providers: [BasicService],
  // bootstrap options : tells which component to bootstrap in application
  bootstrap: [AppComponent]
})
export class AppModule { }
