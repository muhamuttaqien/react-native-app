// very common form of reducer
// this is very plain JavaScript object

export default (state = null, action) => {
  // console.log(action)
  // { type: 'select_library', payload: 1 }
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
