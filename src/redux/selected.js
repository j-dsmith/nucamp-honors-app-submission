import * as ActionTypes from './ActionTypes' 

const selected = (state = [], action) => {
  switch(action.type) {
    case ActionTypes.PROJECT_SELECTED:
      return {...state, action.payload}
  }
}