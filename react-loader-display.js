"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
var $ = require('jquery');
var Styles = require('./Styling/Styles');
var reactLoaderDisplay = (function (_super) {
    __extends(reactLoaderDisplay, _super);
    function reactLoaderDisplay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ShowLoading = function () {
            _this.setState({
                IsLoading: true
            }, function () {
                _this.HandleShowHide(_this.props.DisplayType, true);
            });
        };
        _this.HideLoading = function () {
            _this.setState({
                IsLoading: false
            }, function () {
                _this.HandleShowHide(_this.props.DisplayType, false);
            });
        };
        _this.componentWillMount = function () {
            _this.setState({
                IsLoading: _this.props.IsLoading
            });
        };
        _this.componentWillReceiveProps = function (nextProps) {
            var DisplayType = nextProps.DisplayType;
            var IsLoading = nextProps.IsLoading;
            _this.setState({
                IsLoading: IsLoading
            }, function () {
                _this.HandleShowHide(DisplayType, IsLoading);
            });
        };
        _this.componentDidMount = function () {
            var BackDropLoaderRef = $('.ReactLoaderBackDrop'); //as unique as possible to ensure the id doesn't clash with the user's code
            if (BackDropLoaderRef.length > 1) {
                console.error('react-loader-display: It seems there is a conflict. Your page already contains the same class as the modal, which is ReactLoaderBackDrop.');
                return;
            }
        };
        _this.render = function () {
            var Style = $.extend({}, Styles);
            Style.BackdropVisible.backgroundColor = _this.props.BackDropRGBA;
            Style.BackdropVisible.zIndex = _this.props.ZIndex;
            Style.Modal.backgroundColor = _this.props.ForeGroundColor;
            Style.LoadingText.color = _this.props.TextColor;
            return (React.createElement("div", { style: _this.state.IsLoading ? Style.BackdropVisible : Style.LoaderHidden, className: "ReactLoaderBackDrop" },
                React.createElement("div", { style: Style.Modal, id: "LoaderModalReactLoadingDisplay85934045" },
                    React.createElement("img", { src: _this.props.LoadingImage, style: Style.LoadingImage }),
                    React.createElement("div", { style: Style.LoadingText }, _this.props.LoaderMessage))));
        };
        return _this;
    }
    reactLoaderDisplay.prototype.HandleShowHide = function (DisplayType, IsLoading) {
        var LoaderRef = $('.ReactLoaderBackDrop #LoaderModalReactLoadingDisplay85934045'); //as unique as possible to ensure the id doesn't clash with the user's code
        if (IsLoading) {
            if (DisplayType === "Show") {
                LoaderRef.animate({
                    'margin-top': '150px'
                }, 1, 'swing', function () {
                    LoaderRef.show(1);
                });
            }
            if (DisplayType === "FadeIn") {
                LoaderRef.animate({
                    'margin-top': '150px'
                }, 1, 'swing', function () {
                    LoaderRef.fadeIn(500);
                });
            }
            if (DisplayType === "SlideDown") {
                LoaderRef.animate({
                    'margin-top': '0px'
                }, 1, 'swing', function () {
                    LoaderRef.show(1, function () {
                        LoaderRef.animate({
                            'margin-top': '150px'
                        }, 300);
                    });
                });
            }
        }
        if (!IsLoading) {
            LoaderRef.hide(1, function () {
                LoaderRef.animate({
                    'margin-top': '0px'
                }, 1);
            });
        }
    };
    return reactLoaderDisplay;
}(React.Component));
reactLoaderDisplay.defaultProps = {
    LoaderMessage: 'Please wait...',
    ZIndex: 1000,
    BackDropRGBA: 'rgba(0,0,0,0.1)',
    ForeGroundColor: 'white',
    TextColor: 'black',
    DisplayType: 'Show'
};
exports.default = reactLoaderDisplay;
//# sourceMappingURL=react-loader-display.js.map