var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: uuid(),
          text: 'walk dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'clean yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'workout',
          completed: true
        },
        {
          id: uuid(),
          text: 'have fun',
          completed: false
        }
      ]
    }
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })

    this.setState({todos: updatedTodos})
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos} = this.state
    return (
     <div>
       <TodoSearch onSearch={this.handleSearch}/>
       <TodoList todos={todos} onToggle={this.handleToggle}/>
       <AddTodo onAddTask={this.handleAddTodo}/>
     </div>
    );
  }

});

module.exports = TodoApp;
