import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {provideStore, StoreModule} from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {authReducer, todoReducer} from "./store/reducers";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffects } from "./store/effects";
import { HttpClientModule } from "@angular/common/http";
import {provideRouterStore, routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {provideRouter, RouterModule} from "@angular/router";
import { DashboardTodoComponent } from './pages/dashboard-todo/dashboard-todo.component';
import {AppRoutingModule} from "./app-routing.module";
import { DettaglioTodoComponent } from './pages/dettaglio-todo/dettaglio-todo.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from './components/chart/chart.component';
import {AuthGuard} from "./auth.guard";
import { MyDirectiveDirective } from './directives/my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardTodoComponent,
    DettaglioTodoComponent,
    LoginComponent,
    TodoItemComponent,
    TableComponent,
    ChartComponent,
    MyDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot({todoState: todoReducer, router: routerReducer, authState: authReducer}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([TodoEffects]),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
