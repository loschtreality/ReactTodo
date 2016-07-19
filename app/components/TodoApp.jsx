var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: 1,
          text: 'walk dog'
        },
        {
          id: 2,
          text: 'clean yard'
        },
        {
          id: 3,
          text: 'workout'
        },
        {
          id: 4,
          text: 'have fun'
        }
      ]
    }
  },
  handleAddTodo: function (text) {
    alert("new todo: " + text)
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
       <TodoList todos={todos}/>
       <AddTodo onAddTask={this.handleAddTodo}/>
     </div>
    );
  }

});

module.exports = TodoApp;
