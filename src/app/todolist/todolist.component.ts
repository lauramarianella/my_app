import { Component, OnInit } from '@angular/core';
import IToDo from "../IToDo";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  title = 'To do list';
  myList = ["milk","eggs","bread"];
  class = "cool";

  objLiMilk:IToDo = {toDo:"milk", cssClass:"hot"};
  objLiEggs:IToDo = {toDo:"eggs", cssClass:"cool"};
  objLiBread:IToDo = {toDo:"bread", cssClass:"hot"};
  objLiWater:IToDo = {toDo:"tuna", cssClass:""};
  myList2 = [this.objLiMilk,this.objLiEggs, this.objLiBread, this.objLiWater ];


  constructor() { }

  ngOnInit(): void {
  }

}

