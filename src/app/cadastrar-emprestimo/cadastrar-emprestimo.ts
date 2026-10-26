import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-cadastrar-emprestimo',
  styleUrl: './cadastrar-emprestimo.css',
  templateUrl: './cadastrar-emprestimo.html',
})
export class CadastrarEmprestimo {
  @Output() cadastrar = new EventEmitter<{
    nomePessoa: string;
    tituloLivro: string;
    dataPrevistaDevolucao: string;
  }>();
  nomePessoa = '';
  tituloLivro = '';
  dataPrevistaDevolucao = '';
  mensagem = '';
  erro = '';

  enviar(formulario: NgForm): void {
    this.mensagem = '';
    this.erro = '';
    const nomePessoa = this.nomePessoa.trim();
    const tituloLivro = this.tituloLivro.trim();
    if (formulario.invalid || !nomePessoa || !tituloLivro || !this.dataPrevistaDevolucao) {
      this.erro = 'preencha todos os campos';
      return;
    }
    this.cadastrar.emit({ nomePessoa, tituloLivro, dataPrevistaDevolucao: this.dataPrevistaDevolucao });
    formulario.resetForm({ nomePessoa: '', tituloLivro: '', dataPrevistaDevolucao: '' });
    this.mensagem = 'Emprestimo cadastrado com sucesso';
  }
}
