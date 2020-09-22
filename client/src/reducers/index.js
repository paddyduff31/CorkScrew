import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import till from './till';

export default combineReducers({
    alert,
    auth,
    profile,
    till
})