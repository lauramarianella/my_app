import { Component, OnInit, Input} from '@angular/core';
import IToDo from "../IToDo";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  atrToDo = 'buy milk';

  @Input() atrToDo2: string;
  @Input() atrIndex: number;
  @Input() atrClass: string;

  @Input() atrMyObj: IToDo;

  constructor() { }

  ngOnInit(): void {
  }

  showData($event: any){ 
    if($event) { 
      alert('you clicked me: ' + this.atrMyObj.toDo); 
      console.log($event.target); 
      console.log($event.target.value); 
    } 
  } 
}

