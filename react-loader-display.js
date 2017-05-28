'use strict';
var createReactClass = require('create-react-class');
var h = require('react-hyperscript');
var PropTypes=require('prop-types');

var reactLoaderDisplay = createReactClass({
    displayName: 'ReactLoaderDisplay',
    getDefaultProps: function() {
        return {
            IsLoading: false,
            LoaderMessage:'Please wait...',
            ZIndex:1000,
            BackDropRGBA:'rgba(0,0,0,0.1)',
            ForeGroundColor:'white',
            TextColor:'black'
        };
    },
    propTypes:{
        IsLoading: PropTypes.bool.isRequired,
        LoadingImage:PropTypes.string.isRequired,
        ZIndex:PropTypes.number,
        LoaderMessage: PropTypes.string,
        BackDropRGBA: PropTypes.string,
        ForeGroundColor: PropTypes.string,
        TextColor: PropTypes.string
    },
    render: function() {
        var LoadingContainerStyle=this.props.IsLoading?{
            display:'block',
            position:'fixed',
            top:0,
            left:0,
            right:0,
            bottom:0,
            width:'100%',
            height:'100vh',
            backgroundColor:this.props.BackDropRGBA,
            zIndex:this.props.ZIndex,
            textAlign:'center'
        }:{
            display:'none'
        };

        var LoaderChildComponentStyle={
            display:'block',
            marginLeft:'auto',
            marginRight:'auto',
            width:300,
            borderRadius:'5px',
            marginTop:150,
            backgroundColor:this.props.ForeGroundColor,
            paddingTop:30,
            paddingBottom:30,
            textAlign:'center'
        };

        var LoadingDisplayImage={
            display:'block',
            width:50,
            marginLeft:'auto',
            marginRight:'auto',
            verticalAlign:'middle',
            marginBottom:30
        };

        var LoadingDisplayText={
            display:'block',
            width:'90%',
            marginLeft:'auto',
            marginRight:'auto',
            verticalAlign:'middle',
            marginTop:30,
            color:this.props.TextColor,
            textAlign:'center'
        };

        if(this.props.IsLoading===false)
        {
            return null;
        }

    return (
        h('div',{style:LoadingContainerStyle},[
                h('div',{style:LoaderChildComponentStyle},[
                    h('img',{src:this.props.LoadingImage,style:LoadingDisplayImage}),
                    h('div',{style:LoadingDisplayText},this.props.LoaderMessage)
                ])
            ])
    )


    }
});

module.exports=reactLoaderDisplay;
