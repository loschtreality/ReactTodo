var React = require('react');
var {connect} = require('react-redux')
var actions = require('actions')

export var AddTodo = React.createClass({
  addTask: function (e) {
    e.preventDefault()
    var {dispatch} = this.props
    var task = this.refs.task.value

    if (task.length > 0) {
      this.refs.task.value = ''
      dispatch(actions.addTodo(task))
    }
    else {
      this.refs.task.focus()
    }

  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.addTask}>
          <input type="text" placeholder="Enter task" ref="task"/>
          <button className="button expanded">Add Task</button>
        </form>
      </div>
    );
  }

});

export default connect()(AddTodo)
