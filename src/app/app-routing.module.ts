import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component"
import { UserHomeComponent } from './user-home/user-home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "shome", component: UserHomeComponent},
  { path: "forgotpassword", component: ForgotPasswordComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
