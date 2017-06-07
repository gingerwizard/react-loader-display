"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var States_1 = require("./States");
var $ = require('jquery');
exports.MainReducer = function (state, action) {
    if (state === void 0) { state = States_1.MainState; }
    var NewState = $.extend({}, state);
    var ActionType = action.type;
    var ActionPayload = action.payload;
    if (ActionType === "UPDATE_LOADER_VISIBLE_STATE") {
        NewState.LoaderVisible = ActionPayload.LoaderVisible;
    }
    return NewState;
};
//# sourceMappingURL=Reducers.js.map