var React = require('react');

var AddTodo = React.createClass({
  addTask: function (e) {
    e.preventDefault()
    var task = this.refs.task.value

    if (task.length > 0) {
      this.refs.task.value = ''
      this.props.onAddTask(task)
    }

  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <input type="text" placeholder="Enter task" ref="task"/>
          <button className="button">Add Task</button>
        </form>
      </div>
    );
  }

});

module.exports = AddTodo;
