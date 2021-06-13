import * as types from '../Constants/ActionTypes';

var initialState = 14;

var reducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SETTING_SIZE:
            return  state = (state +  action.fontsize >= 8 && state +  action.fontsize <= 34) ? state +  action.fontsize : state;
        case types.ALL_SETTING:
            if (action.flag) {
                
                return state = 14;
            }
            break;   
        default :
            return state;
    }
};

export default reducer;