import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { PessoaComponent } from './pessoa.component';

const routes: Routes = [
  {
    path: '',
    component: PessoaComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: ':id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
