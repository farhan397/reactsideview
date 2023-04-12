import {combineReducers} from 'redux'
import userinformation from './reducer'

import condinformation from './condreducer'
import shiftinformation from './shiftreducer'


export default combineReducers({
    userinformation,
    condinformation,
    shiftinformation
    
})