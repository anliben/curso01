import { Component } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoPageDynamicSearchLiterals, PoPageDynamicTableActions } from '@po-ui/ng-templates';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {

  actions: PoPageDynamicTableActions = {
    new: '/pessoa/new',
    remove: true,
    removeAll: true,
    duplicate: '/pessoa/new',
    edit: '/pessoa/:id'
  }
  breadcrumb: PoBreadcrumb = {
    items: [
      {
        label:"home",
        link:"/"
      },
      {
        label:"pesssoas",
        link:""
      }
    ]
  }
}

