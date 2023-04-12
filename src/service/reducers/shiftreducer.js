import { ADD_SHIFT_INFO } from '../constants'
const initialState = {
    shiftdata: []
}
export default function shiftinformation(state = [], action) {
    switch (action.type) {
        case ADD_SHIFT_INFO:
            // console.warn("reducer",action)
            return [
                ...state,
                {shiftdata: action.data}
            ]
        default:
            return state
    }


}
