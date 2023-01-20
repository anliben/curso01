import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PessoaComponent } from './pessoa/pessoa.component';
import { NewComponent } from './pessoa/new/new.component';
import { EditComponent } from './pessoa/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PoTemplatesModule
  ],
  providers: [
    NewComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
