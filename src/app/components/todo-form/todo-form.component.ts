import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
