export class model {
  user;
  items;

  constructor() {
    this.user = 'Elma Ann';
    this.items = [
      { action: 'Buy Flowers', done: false },
      { action: 'Get Shoes', done: false },
      { action: 'Buy Groceries', done: true },
      { action: 'Do workout', done: false },
      { action: 'See a Movie', done: false },
      { action: 'Coding Practice', done: false },
    ];
  }
}

export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
