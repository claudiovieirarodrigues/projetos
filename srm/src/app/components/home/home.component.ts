import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shortcutList: Array<any> = [];
  breadcrumb: string = ''; 

  constructor() { }

  ngOnInit() {
    this.shortcut();
    this.breadcrumb = 'Página Inicial > Painel Gestão';
  }

  shortcut(){
    this.shortcutList = [
      'Envio', 'Assinatura', 'Envio de Duplicatas', 'Assinatura Digital', 'Nova Operação'
    ]
  } 

}
