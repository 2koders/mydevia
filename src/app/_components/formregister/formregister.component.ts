import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formregister',
  templateUrl: './formregister.component.html',
  styleUrls: ['./formregister.component.css']
})
export class FormregisterComponent implements OnInit {

  states: States[] = [
    {id: 1, name: "Santo Domingo"},
    {id: 2, name: "Monseñor Nouel"},
    {id: 3, name: "Santiago"},
    {id: 4, name: "La Vega"},
    {id: 5, name: "La Altagracia"},
    {id: 6, name: "Samaná"},
    {id: 7, name: "Pedernales"},
    {id: 8, name: "Monte Cristi"},
    {id: 9, name: "Peravia"},
    {id: 10, name: "Independencia"},
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface States {
  id: number,
  name: string
}