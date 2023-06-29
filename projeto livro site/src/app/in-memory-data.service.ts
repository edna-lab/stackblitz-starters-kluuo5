import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Livro } from './livros/livro.model';

export class InMemoryDataService implements InMemoryDbService {
    createDb() : {} {
        let livros : Livro[] = [
            {id: 1, name: "Nutricao Dietetica", type: "Fantasia", description: "aaaaaaa", year: 1997},
            {id: 2, name: "aaa", type: "aaa", description: "aaa", year: 12},
            {id: 3, name: "aaa", type: "aaa", description: "aaa", year: 4},
            {id: 4, name: "aaa", type: "aaa", description: "aaa", year: 5},
            {id: 5, name: "aaa", type: "aaa", description: "aaa", year: 6}
         ];
         return {livros};
    }
}