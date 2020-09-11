import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyDevia';
  router: Router;

  constructor(private _router: Router){
    this.router = _router;
    AOS.init();
  }
}
