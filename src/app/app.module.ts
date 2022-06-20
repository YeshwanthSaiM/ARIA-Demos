import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VtComponent } from './components/vt/vt.component';
import { HomeComponent } from './components/home/home.component';
import { InteriorComponent } from './components/interior/interior.component';
import { HealthComponent } from './components/health/health.component';
import { StudyComponent } from './components/study/study.component';

@NgModule({
  declarations: [
    AppComponent,
    VtComponent,
    HomeComponent,
    InteriorComponent,
    HealthComponent,
    StudyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
