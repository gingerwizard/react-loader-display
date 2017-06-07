"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var Reducers_1 = require("./Reducers");
var AllReducers = redux_1.combineReducers({
    MainReducer: Reducers_1.MainReducer
});
exports.Store = redux_1.createStore(AllReducers, {}, redux_1.applyMiddleware(redux_thunk_1.default));
//# sourceMappingURL=Store.js.map