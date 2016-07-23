var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
    return action.searchText

    default:
    return state
  }
}

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_COMPELTED":
      return !state

    default:
    return state
  }
}


export var todosReducer = (state = [],action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
      // add case for TOGGLE_TODO. completed = !value & updateCompletedAt (clear or set timestamp)
      case 'TOGGLE_TODO':
      return state.map((item) => {
        if (item.id === action.id) {
          var nextCompleted = !item.completed

          return {
          ...item,
          completed: nextCompleted,
          completedAt: nextCompleted ? moment().unix() : undefined
          }
        }
        return item
      })
    default:
    return state
  }
}
