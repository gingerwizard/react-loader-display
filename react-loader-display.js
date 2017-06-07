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
var PropTypes = require('prop-types');
var $ = require('jquery');
var Styles = require('./Styling/Styles');
var reactLoaderDisplay = (function (_super) {
    __extends(reactLoaderDisplay, _super);
    function reactLoaderDisplay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentDidMount = function () {
            var LoaderRef = $('.ReactLoaderBackDrop #LoaderModalReactLoadingDisplay85934045'); //as unique as possible to ensure the id doesn't clash with the user's code
            if (LoaderRef.length > 1) {
                console.error('react-loader-display: It seems there is a conflict. Your page already contains the same ID as the modal, which is LoaderModalReactLoadingDisplay85934045. It should not cause problems but please change this ID in your code just to be sure.');
            }
        };
        _this.componentWillReceiveProps = function (nextProps) {
            var DisplayType = nextProps.DisplayType;
            var IsLoading = nextProps.IsLoading;
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
        _this.render = function () {
            var Style = $.extend({}, Styles);
            Style.BackdropVisible.backgroundColor = _this.props.BackDropRGBA;
            Style.BackdropVisible.zIndex = _this.props.ZIndex;
            Style.Modal.backgroundColor = _this.props.ForeGroundColor;
            Style.LoadingText.color = _this.props.TextColor;
            return (React.createElement("div", { style: _this.props.IsLoading ? Style.BackdropVisible : Style.LoaderHidden, className: "ReactLoaderBackDrop" },
                React.createElement("div", { style: Style.Modal, id: "LoaderModalReactLoadingDisplay85934045" },
                    React.createElement("img", { src: _this.props.LoadingImage, style: Style.LoadingImage }),
                    React.createElement("div", { style: Style.LoadingText }, _this.props.LoaderMessage))));
        };
        return _this;
    }
    return reactLoaderDisplay;
}(React.Component));
reactLoaderDisplay.defaultProps = {
    IsLoading: false,
    LoaderMessage: 'Please wait...',
    ZIndex: 1000,
    BackDropRGBA: 'rgba(0,0,0,0.1)',
    ForeGroundColor: 'white',
    TextColor: 'black',
    DisplayType: 'Show'
};
reactLoaderDisplay.propTypes = {
    IsLoading: PropTypes.bool.isRequired,
    LoadingImage: PropTypes.string.isRequired,
    ZIndex: PropTypes.number,
    LoaderMessage: PropTypes.string,
    BackDropRGBA: PropTypes.string,
    ForeGroundColor: PropTypes.string,
    TextColor: PropTypes.string
};
exports.default = reactLoaderDisplay;
//# sourceMappingURL=react-loader-display.js.map