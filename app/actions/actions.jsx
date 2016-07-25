export var setSearchText = (searchText) => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText
  }
}

export var addTodo = (text) => {
  return {
    type: "ADD_TODO",
    text
  }
}

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export var toggleShowCompleted = () => {
  return {
    type: "TOGGLE_SHOW_COMPLETED"
  }
}



// toggleTodo(id) type: Toggle_Todo
export var toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  }
}
