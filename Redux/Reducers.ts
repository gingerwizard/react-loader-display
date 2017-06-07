import {MainState} from './States';
const $=require('jquery');

export let MainReducer=function(state = MainState, action) {
    let NewState=$.extend({},state);
    let ActionType=action.type;
    let ActionPayload=action.payload;

    if(ActionType==="UPDATE_LOADER_VISIBLE_STATE")
    {
        NewState.LoaderVisible=ActionPayload.LoaderVisible;
    }


    return NewState;
};