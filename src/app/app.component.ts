import { Component } from '@angular/core';
import { model, TodoItem } from './../Model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDoTasks';
  model = new model();

  // return the username
  getName() {
    return this.model.user;
  }

  getTodoItems() {
    // return all items in the model
    return this.model.items;
    // return only items that is done
    //return this.model.items.filter((item) => item.done);
  }

  addItem(newTask) {
    if (newTask == '') {
      alert('Please enter a task...!!');
    } else if (newTask != '') {
      this.model.items.push(new TodoItem(newTask, false));
    }
  }
}
