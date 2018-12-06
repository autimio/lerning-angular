import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  pessoas: string[] = ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5'];
  nome: string = "Thiago";

  constructor() { }

  ngOnInit() {
  }

  listar() {

  }

  
}
