var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');


describe("AddTodo", () => {
  it("should exist", () => {
    expect(AddTodo).toExist()
  })

  it("should call onAddTask when valid task is entered", () => {
    var spy = expect.createSpy()
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTask={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.task.value = "New task"
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith("New task")

  })

  it("should not call onAddTask when invalid (empty) task is entered", () => {
    var spy = expect.createSpy()
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTask={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.task.value = ""
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })


})
