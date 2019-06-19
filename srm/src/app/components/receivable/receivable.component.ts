import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receivable',
  templateUrl: './receivable.component.html',
  styleUrls: ['./receivable.component.css']
})
export class ReceivableComponent implements OnInit {

  breadcrumb: string = '';
  alertItems: Array<any> = [];
  
  constructor() { }

  ngOnInit() {
    this.breadcrumb = 'Financeiro > Recebíveis';   
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
