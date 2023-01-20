import { Component } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  /*
  {
          "nome": "joao",
          "idade": 23,
          "casado": false,
          "cpf": 123423434,
          "estado": "Sao Paulo",
          "cep": 234234
        }
  */
  fields: Array<PoDynamicFormField> = [
    {
      property: 'nome',
      label: 'nome'
    },
    {
      property: 'idade',
      label: 'idade',
      type: 'number'

    },
    {
      property: 'cadasado',
      label: 'cadasado'
    },
    {
      property: 'cpf',
      label: 'cpf',
      type: 'number'
    },
    {
      property: 'estado',
      label: 'estado',
    }
  ]
}
