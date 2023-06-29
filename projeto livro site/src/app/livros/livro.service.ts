import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Livro } from './livro.model';
import { LIVROS } from './livros-mock';
import { Observable } from 'rxjs';
import { MessageService} from './message.service';
import { of } from 'rxjs';

@Injectable()
export class LivroService{

   private livrosUrl : string = 'app/livro';
   private headers: Headers = new Headers ({'Content-Type' : 'application/json'})

    constructor(
       private http: Http,
       private messageService: MessageService
    ) {}

      getLivros() : Promise<Livro[]> {
          return this.http.get(this.livrosUrl) 
         .toPromise()
         .then(response => response.json().data as Livro[])
      //  return Promise.resolve(LIVROS);        
      }
         getLivro(id:number): Promise<Livro> {
           return this.getLivros()
           .then((livros: Livro[]) => livros.find(livro => livro.id === id)); 
          }
}