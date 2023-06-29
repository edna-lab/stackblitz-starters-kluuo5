import { Routes, RouterModule } from '@angular/router';
import { LivrosComponent } from './livros'
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'livro', component: LivrosComponent },
    { path: 'salvar', redirectTo:'/livro'},
    { path: 'salvar/:id', redirectTo:'/livro'}
]

export const routing = RouterModule.forRoot(appRoutes);