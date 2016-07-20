var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos))
      return todos
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos')
    var todos = []

    try {
      todos = JSON.parse(stringTodos)
    } catch (e) {

    }
    return $.isArray(todos) ? todos : []
  },
  filterTodos: function (todos, showCompleted, searchText) {

    // Filter by showCompleted
    // Filter by searchText
    // Sort todos with non-completed first

    return todos.filter((el) => {
      return !el.completed || showCompleted
    })
    .filter((el) => {
      if (el.text.toLowerCase().indexOf(searchText) > -1 || searchText.length === 0) {
        return el
      }
    })
    .sort((a,b) => {
      if (!a.completed && b.completed) {
        return -1
      }
      else if (a.completed && !b.completed) {
        return 1
      }
      else {
        return 0
      }
    })


  }
};
