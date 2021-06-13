import * as types  from './../Constants/ActionTypes';

export const activeColor = (color) =>{
    return{
        type: types.ACTIVE_COLOR,
        color
    }
};

export const setSize = (fontsize) =>{
    return{
        type: types.SETTING_SIZE,
        fontsize
    }
};

export const resetAll = (flag) =>{
    return{
        type: types.ALL_SETTING,
        flag
    }
};
