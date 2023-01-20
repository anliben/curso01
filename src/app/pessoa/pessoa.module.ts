import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
