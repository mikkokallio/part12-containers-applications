conn = new Mongo();
db = conn.getDB("the_database");
db.createUser({
  user: 'root',
  pwd: 'example',
  roles: [
    {
      role: 'readWrite',
      db: 'the_database',
    },
  ],
});

//db.createCollection('todos');

//db.todos.insert({ text: 'Write code', done: true });
//db.todos.insert({ text: 'Learn about containers', done: false });