import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    BrowserModule,
    AppComponent,
    HomeComponent,
    HeaderComponent, 
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      
    ])
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }