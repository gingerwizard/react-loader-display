"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLoaderVisibleState = function (state) {
    return function (dispatch, getState) {
        dispatch({
            type: 'UPDATE_LOADER_VISIBLE_STATE',
            payload: {
                LoaderVisible: state
            }
        });
    };
};
//# sourceMappingURL=Actions.js.map