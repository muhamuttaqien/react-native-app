const reducerDummy = () => ['12345'];
const reducer = (state = [], action) => { // is always called with two argument including current state and action
  if (action.type === 'split_string') {
    return action.payload.split('');
  } else if (action.type ===  'add_character') {
    // return [ ...state, action.payload] // product new object in reducer [80. Redux is Hard! 10.40]
    state.push(action.payload)
    return state;
  }

  return state;
};


const store = Redux.createStore(reducer);

store.getState();

const action = {
  type: 'split_string', // command or instructions
  payload: 'abcde' // data that will be processed by reducer
};

store.dispatch(action); // send off the command to reducer, in practice, this one will be subtituted by real user event
store.getState() // can be shown later in console.log()

const action2 = { // in practice, we name the function `selectLibrary`
    type: 'add_character',
    payload: 'a'
};

store.dispatch(action2) // rerun the reducer and take the last time of state and become it the state = []'s value (incremental changes)
store.getState()

// Redux is, in my own definition, a such an incredible state managing framework
// React official definition is predicatable state container for JavaScript apps
// why in the world would ever code like this? what is the point of action, store, reducer stuffs?
// Redux is one of the best libraries in existence for scaling up application to be very large with a least amount of code complexity
// the action system make all easy, it will make us clear about how application's states changes in our application,
// make the state changes become more predicatable


// Tasks:
// 1. The concept of Redux and its simple definition
// 2. Redux Playgrounds
// 3. React-redux and its short implementation
