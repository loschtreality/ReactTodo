var React = require('react');
var {connect} = require('react-redux')
import Todo from 'Todo'
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({


  render: function() {
    var {todos, showCompleted, searchText} = this.props
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText).map((item) => {
        return (
          <Todo key={item.id} {...item}/>
        )
      })
      if (filteredTodos.length === 0) {
        return (
          <p className='container__message'>Nothing to do</p>
        )
      }
      return filteredTodos
    }
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }

});

export default connect(
  (state) => {
    return state
  }
)(TodoList);
