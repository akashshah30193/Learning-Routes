import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircularComponent } from './circular/circular.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import {EmojiPickerModule} from "ng-emoji-picker";
import { EmojiPickerDirective } from './emoji-picker.directive';

@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
    PersonalFormComponent,
    SubmitFormComponent,
    EmojiPickerDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    EmojiPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
