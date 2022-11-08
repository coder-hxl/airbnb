interface IAction {
  type: string
  [key: string]: any
}

const initialState = {
  message: 'Hello Entire'
}

function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
