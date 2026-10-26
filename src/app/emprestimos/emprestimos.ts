import { Component } from '@angular/core';
import { CadastrarEmprestimo } from '../cadastrar-emprestimo/cadastrar-emprestimo';
import { ListaEmprestimos } from '../lista-emprestimos/lista-emprestimos';
import { Emprestimo } from '../models/emprestimo';
import { EmprestimoService } from '../services/emprestimo.service';

@Component({
  imports: [CadastrarEmprestimo, ListaEmprestimos],
  selector: 'app-emprestimos',
  styleUrl: './emprestimos.css',
  templateUrl: './emprestimos.html',
})
export class Emprestimos {
  emprestimos: Emprestimo[] = [];

  constructor(private service: EmprestimoService) {
    this.emprestimos = this.service.listar();
  }

  get totais(): number { return this.emprestimos.length; }
  get devolvidos(): number { return this.emprestimos.filter(item => item.devolvido).length; }
  get emAberto(): number { return this.totais - this.devolvidos; }

  cadastrar(dados: {
    nomePessoa: string;
    tituloLivro: string;
    dataPrevistaDevolucao: string;
  }): void {
    this.service.adicionar(dados);
    this.atualizarLista();
  }

  remover(id: number): void {
    this.service.remover(id);
    this.atualizarLista();
  }

  registrarDevolucao(id: number): void {
    this.service.registrarDevolucao(id);
    this.atualizarLista();
  }

  private atualizarLista(): void {
    this.emprestimos = this.service.listar();
  }
}
