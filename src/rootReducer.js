import { combineReducers } from 'redux';

// import your Module reducers here and combine them
import sample from './withProps/reducers'

const rootReducer = combineReducers({
	sample
	// additional reducers go here.
});

export default rootReducer;