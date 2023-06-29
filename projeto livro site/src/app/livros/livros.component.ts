import {Component, OnInit} from '@angular/core';
import { Livro } from './livro.model';
import { LivroService} from './livro.service';
import { MessageService } from './message.service';


@Component({
    selector : 'livros',
    templateUrl: 'livros.component.html'
})


export class LivrosComponent implements OnInit {
    livros : Livro[];

    constructor(
      private livroService: LivroService,
      private messageService: MessageService
    ){}

    ngOnInit() {
         this.livroService.getLivros()
        .then((livros : Livro[]) => {
            this.livros = livros;
        }).catch(err => console.log(err));
    }


}