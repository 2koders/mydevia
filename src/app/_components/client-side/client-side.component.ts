import { Component, OnInit } from '@angular/core';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client-side',
  templateUrl: './client-side.component.html',
  styleUrls: ['./client-side.component.css']
})
export class ClientSideComponent implements OnInit {

  map = faMapMarkedAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
