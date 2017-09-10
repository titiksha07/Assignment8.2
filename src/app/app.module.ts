import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CricketerComponent } from './cricketlist/cricketlist.component';
import { CricketerService } from './cricket-service';

@NgModule({
  declarations: [
    AppComponent,
    CricketerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CricketerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
