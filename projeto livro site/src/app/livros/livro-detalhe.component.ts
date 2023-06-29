import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroService } from './livro.service';
import { Livro } from './livro.model';
import { LIVROS } from './livros-mock';
import { empty } from 'rxjs';

@Component({
  moduleId: module.id,
  selector : 'livro-detalhe',
  templateUrl : 'livro-detalhe.component.html',
})

export class LivroDetalheComponent implements OnInit {
    livro : Livro;
    private isNovo : boolean= true;

    constructor(
      private livroService : LivroService,
      private route : ActivatedRoute,
      private location : Location
    ) {}

    ngOnInit(): void {
      this.livro = new Livro(0,'','','',null);
       this.route.params.forEach((params: Params)=>{
               let id: number = +params['id'];
               
          if(id) {
            this.isNovo = false;
                  this.livroService.getLivro(id)
                     .then((livro: Livro)=> {
                       console.log(livro);
                       this.livro = livro;
                  });
               }
     });
    }

    getFormGroupClass(isValid : boolean, isPristine: boolean) : {} {
        return {
            'form-group' : true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        }
    }

     getFormControlClass(isValid : boolean, isPristine: boolean) : {} {
        return {
            'form-control' : true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    onSubmit() : void {
        if (this.isNovo) {
            console.log('cadastrar');
        } else {
            console.log('alterar');
        }
    }

}