import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-ventajas',
  templateUrl: './main-ventajas.component.html',
  styleUrls: ['./main-ventajas.component.css']
})
export class MainVentajasComponent implements OnInit {
  faStar = faStar;

  constructor() { }

  ngOnInit() {
  }

}
