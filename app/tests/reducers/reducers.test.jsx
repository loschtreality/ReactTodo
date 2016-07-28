var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');


describe("Reducers", () => {
  describe("SearchTextReducer",() => {
    it("should set searchText", () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }

      var res = reducers.searchTextReducer(df(''), df(action))
      expect(res).toEqual(action.searchText)
    })

    describe("showCompletedReducer", () => {
      it("should change the status of show completed to true/false", () => {
        var action = {
          type: "TOGGLE_SHOW_COMPLETED",
        }

        var res = reducers.showCompletedReducer(df(false), df(action))
        expect(res).toEqual(true)
      })

    })

  })
  describe("todosReducer", () => {
    it("should add new todo", () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'something to do',
          completed: false,
          createdAt: 1204812
        }
      }

      var res = reducers.todosReducer(df([]),df(action))

      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(action.todo)
    })

    it("should update todo", () => {
      var todoExample = [
        {
          id: '1',
          text: 'something',
          completed: true,
          createdAt: 123,
          completedAt: 125
        }
      ]
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: "UPDATE_TODO",
        id: todoExample[0].id,
        updates
      }
      var res = reducers.todosReducer(df(todoExample),df(action))

      expect(res[0].completed).toEqual(updates.completed)
      expect(res[0].completedAt).toEqual(updates.completedAt)
      expect(res[0].text).toEqual(todoExample[0].text)
    })

    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }]
      var action = {
        type: 'ADD_TODOS',
        todos
      }
      var res = reducers.todosReducer(df([]),df(action))

      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(todos[0])
    })

    it('should clear todos array on LOGOUT', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }]
      var action = {
        type: 'LOGOUT',
      }
      var res = reducers.todosReducer(df(todos),df(action))
      expect(res.length).toEqual(0)
    })
  })

  describe("authReducer", () => {
    it('should store uid on LOGIN', () => {
      var action = {
        type: 'LOGIN',
        uid: '123'
      }

      var res = reducers.authReducer(df({}),df(action))
      expect(res).toEqual({
        uid: action.uid
      })
    })

    it('should clear auth on LOGOUT', () => {
      var action = {
        type: 'LOGOUT'
      }
      var userObj = {
          uid: '51223'
      }

      var res = reducers.authReducer(df(userObj),df(action))
      expect(res).toEqual({})
    })
  })
})
