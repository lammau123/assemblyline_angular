import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AssemblylineComponent } from './components/assemblyline/assemblyline.component';
import { StageComponent } from './components/stage/stage.component';

@NgModule({
  declarations: [
    AppComponent,
    AssemblylineComponent,
    StageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
