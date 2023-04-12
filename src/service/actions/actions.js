import {ADD_USER_INFO} from '../constants'
import {ADD_COND_INFO} from '../constants'
import {ADD_SHIFT_INFO} from '../constants'
import {CLEAR_ARRAY} from '../constants'

export const adduserinfo =(data)=>{
     console.warn("actionuserinfo",data)
    return {
        type:ADD_USER_INFO,
        data:data
    }
}
export const addcondinfo =(data)=>{
     console.warn("actioncondinfo",data)
    return {
        type:ADD_COND_INFO,
        data:data
    }
}
export const addshiftinfo =(data)=>{
     console.warn("shiftaction",data)
    return {
        type:ADD_SHIFT_INFO,
        data:data
    }
}
export const cleararray =()=>{
    // console.warn("CLEARARRAY",data)
   return {
       type:CLEAR_ARRAY,
        // data:data
       
   }
}
