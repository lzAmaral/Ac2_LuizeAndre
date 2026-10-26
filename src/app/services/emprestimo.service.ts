import { Injectable } from '@angular/core';
import { Emprestimo } from '../models/emprestimo';

@Injectable({ providedIn: 'root' })
export class EmprestimoService {
  private emprestimos: Emprestimo[] = [];
  private proximoId = 1;

  listar(): Emprestimo[] {
    return this.emprestimos.map(emprestimo => ({ ...emprestimo }));
  }

  adicionar(dados: {
    nomePessoa: string;
    tituloLivro: string;
    dataPrevistaDevolucao: string;
  }): void {
    const novoEmprestimo: Emprestimo = {
      id: this.proximoId,
      nomePessoa: dados.nomePessoa,
      tituloLivro: dados.tituloLivro,
      dataPrevistaDevolucao: dados.dataPrevistaDevolucao,
      devolvido: false
    };

    this.emprestimos.push(novoEmprestimo);
    this.proximoId = this.proximoId + 1;
  }

  remover(id: number): void {
    this.emprestimos = this.emprestimos.filter(emprestimo => emprestimo.id !== id);
  }

  registrarDevolucao(id: number): void {
    const emprestimo = this.emprestimos.find(item => item.id === id);
    if (emprestimo) emprestimo.devolvido = true;
  }
}
