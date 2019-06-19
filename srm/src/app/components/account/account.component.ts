import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  breadcrumb: string = '';
  alertItems: Array<any> = [];
  
  constructor() { }

  ngOnInit() {
    this.breadcrumb = 'Abertura de Contas > Conta Digital';   
    this.alerts();
  }

  alerts(){
    this.alertItems = [
      { id: '1', description: '23 Notas Canceladas'},
      { id: '2', description: '13 Notas Canceladas'},
      { id: '3', description: '7 Assinaturas Digital'}
    ]
  } 


}
