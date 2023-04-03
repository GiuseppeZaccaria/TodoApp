import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardTodoComponent} from "./pages/dashboard-todo/dashboard-todo.component";
import {DettaglioTodoComponent} from "./pages/dettaglio-todo/dettaglio-todo.component";
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: 'dashboard', component: DashboardTodoComponent, canActivate: [AuthGuard] },
  { path: 'dettaglio/:id', component: DettaglioTodoComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  { path: '**', component: DashboardTodoComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
