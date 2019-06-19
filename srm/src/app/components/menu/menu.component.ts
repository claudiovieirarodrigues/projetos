import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

navItems: Array<any> = [];


  constructor(private router: Router) { }

  ngOnInit() {
    this.menu();
  }

  menu(){
    this.navItems = [
      { description: 'Painel de Gestão', link: '/gestao', icon: 'globe'},
      { description: 'Conta Digital', link: '/conta', icon: 'at'},
      { description: 'Ant. de Recebíveis', link: '/recebiveis', icon: 'circle'}     
    ]
  } 

}
