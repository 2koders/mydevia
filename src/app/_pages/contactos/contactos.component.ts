import { Component, OnInit } from '@angular/core';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  phone = faPhone
  mail = faMailBulk

  constructor() { }

  ngOnInit() {
  }

}
