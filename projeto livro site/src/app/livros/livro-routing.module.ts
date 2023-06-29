import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { LivrosComponent} from './livros.component'
import { LivroDetalheComponent} from './livro-detalhe.component'

const livroRoutes: Routes =[
  {
      path : 'livro',
      component: LivrosComponent
  },
  {
      path : 'livro/salvar',
      component: LivroDetalheComponent
  },
  {
      path : 'livro/salvar/:id',
      component: LivroDetalheComponent
  }
]

@NgModule({
    imports: [
        RouterModule.forChild(livroRoutes)
    ],
    exports : [RouterModule]
})

export class LivroRoutingModule {}