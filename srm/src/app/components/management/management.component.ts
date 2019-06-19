import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  breadcrumb: string = '';
  alertItems: Array<any> = [];
  
  
  constructor() { }

  ngOnInit() {
    this.breadcrumb = 'Página Inicial > Painel Gestão';   
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
