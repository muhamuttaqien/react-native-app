import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer, // library will be state
  selectedLibraryId: SelectionReducer // selectedLibraryId will be state
});

// when first our app boost up, it will automatically run all the registered reducers to accumulate some amount of initial state
// somehow we need to make our states work properly and nicely so that is why we use combine reducers
// when we think about the data of our apps we should think also about reducers producing some amount of state of our apps
