export let UpdateLoaderVisibleState=function(state)
{
    return (dispatch, getState) => {
        dispatch({
            type:'UPDATE_LOADER_VISIBLE_STATE',
            payload:{
                LoaderVisible:state
            }
        });
    };
};
