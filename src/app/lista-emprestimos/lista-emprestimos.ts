import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Emprestimo } from '../models/emprestimo';

@Component({
  imports: [NgClass],
  selector: 'app-lista-emprestimos',
  styleUrl: './lista-emprestimos.css',
  templateUrl: './lista-emprestimos.html',
})
export class ListaEmprestimos {
  @Input() emprestimos: Emprestimo[] = [];
  @Output() remover = new EventEmitter<number>();
  @Output() devolver = new EventEmitter<number>();

  formatarData(data: string): string {
    return data.split('-').reverse().join('/');
  }
}
