import { Component, OnInit } from '@angular/core';
import { faUsers, faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import * as AOS from 'aos';

@Component({
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.scss']
})
export class MaquinaComponent implements OnInit {

  users = faUsers;
  money = faCommentDollar;

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
