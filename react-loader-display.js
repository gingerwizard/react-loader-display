'use strict';
var createReactClass = require('create-react-class');
var h = require('react-hyperscript');
var PropTypes=require('prop-types');
var $=require('jquery');
var Styles=require('./Styling/Styles');

var reactLoaderDisplay = createReactClass({
    displayName: 'ReactLoaderDisplay',
    getDefaultProps: function() {
        return {
            IsLoading: false,
            LoaderMessage:'Please wait...',
            ZIndex:1000,
            BackDropRGBA:'rgba(0,0,0,0.1)',
            ForeGroundColor:'white',
            TextColor:'black',
            DisplayType:'Show'
        };
    },
    componentWillReceiveProps: function(nextProps) {
        var DisplayType=nextProps.DisplayType;
        var IsLoading=nextProps.IsLoading;
        var LoaderRef=$('#LoaderModal');

        if(IsLoading)
        {
            if(DisplayType==="Show")
            {
                LoaderRef.animate({
                    'margin-top':'150px'
                },1,'swing',function(){
                    LoaderRef.show(1);
                })
            }


            if(DisplayType==="FadeIn")
            {
                LoaderRef.animate({
                    'margin-top':'150px'
                },1,'swing',function(){
                    LoaderRef.fadeIn(300);
                })
            }

            if(DisplayType==="SlideDown")
            {
                LoaderRef.show(1,function(){
                    LoaderRef.animate({
                        'margin-top':'150px'
                    },300)
                });
            }
        }

        if(!IsLoading)
        {
            LoaderRef.hide(1,function(){
                LoaderRef.animate({
                    'margin-top':'0px'
                },1)
            })
        }
    },
    propTypes:{
        IsLoading: PropTypes.bool.isRequired,
        LoadingImage:PropTypes.string.isRequired,
        ZIndex:PropTypes.number,
        LoaderMessage: PropTypes.string,
        BackDropRGBA: PropTypes.string,
        ForeGroundColor: PropTypes.string,
        TextColor: PropTypes.string,
        DisplayType:PropTypes.string
    },
    render: function() {

        var Style=$.extend({},Styles);
        Style.BackdropVisible.backgroundColor=this.props.BackDropRGBA;
        Style.BackdropVisible.zIndex=this.props.ZIndex;
        Style.Modal.backgroundColor=this.props.ForeGroundColor;
        Style.LoadingText.color=this.props.TextColor;

        var ComponentObj=(
            h('div',{style:
                this.props.IsLoading?Style.BackdropVisible:Style.LoaderHidden},[
                h('div',{style:Style.Modal,id:'LoaderModal'},[
                    h('img',{src:this.props.LoadingImage,style:Style.LoadingImage}),
                    h('div',{style:Style.LoadingText},this.props.LoaderMessage)
                ])
            ])
        );

        return this.props.IsLoading?ComponentObj:null;
    }
});

module.exports=reactLoaderDisplay;
