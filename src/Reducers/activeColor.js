import * as types from '../Constants/ActionTypes';

var initialState = 'red';

var reducer = (state = initialState, action) =>{
    switch(action.type){
        case types.ACTIVE_COLOR:
            return action.color;

        case types.ALL_SETTING:
            if (action.flag) {
                
                return state = 'red';
            }
            break;
            
        default :
            return state;
    }
};

export default reducer;