import { combineReducers } from 'redux'
import goals from './goals'
import selectedGoal from './selectedGoal';
import sidebar from './sidebar';

const aligned = combineReducers({
  goals,
  selectedGoal,
  sidebar
});

export default aligned;