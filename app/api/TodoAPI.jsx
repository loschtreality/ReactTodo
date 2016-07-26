var $ = require('jquery');

module.exports = {
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
