import { Component } from '@angular/core';
import {LoginComponent, LoginFormComponent, LoginRegisterComponent} from "@spartacus/user/account/components";

@Component({
  selector: 'app-olf-login',
  templateUrl: './olf-login.component.html',
  styleUrls: ['./olf-login.component.scss']
})
export class OlfLoginComponent extends LoginFormComponent{

}
