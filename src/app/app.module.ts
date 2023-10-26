import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { NamePipe } from './name.pipe';

@NgModule({
  declarations: [AppComponent, NamePipe],
  imports: [BrowserModule, UsersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
