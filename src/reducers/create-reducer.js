export default function(handlers, defaultState = {}) {
  return abstractReducer.bind(null, handlers, defaultState);
}

function abstractReducer(handlers, defaultState, state, action) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state || defaultState;
}
