import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestioneComponent } from './gestione/gestione.component';
import { GestioneStudentiComponent } from './gestione/gestione-studenti/gestione-studenti.component';
import { StudentiIscrittiComponent } from './gestione/gestione-studenti/studenti-iscritti/studenti-iscritti.component';
import { StudenteInfoComponent } from './gestione/gestione-studenti/studente-info/studente-info.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ActiveComponent } from './form/active/active.component';
import { InactiveComponent } from './form/inactive/inactive.component';

@NgModule({
  declarations: [
    AppComponent,
    GestioneComponent,
    GestioneStudentiComponent,
    StudentiIscrittiComponent,
    StudenteInfoComponent,
    FormComponent,
    ActiveComponent,
    InactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
