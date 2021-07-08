export const LOGIN_STATE = {
  isLogged: false,
}

export const LOGIN_ACTIONS = {
  SET_LOGIN: '@setLogin',
}

export const loginReducer = (state = LOGIN_STATE, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.SET_LOGIN:
      return { isLogged: true }
    default:
      return state
  }
}
