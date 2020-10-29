import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ReservationComponent } from './view/reservation/reservation.component';
import { MenuComponent } from './view/menu/menu.component';
import { ProfileComponent } from './view/profile/profile.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { ContactComponent } from './view/contact/contact.component';
import { TodosComponent } from './view/todos/todos.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'menu', component: MenuComponent },
    { path: 'todos', component: TodosComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'profile', component: ProfileComponent },
    // { path: 'profile/:id', component: ProfileComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [],
})

export class AppRoutingModule {}