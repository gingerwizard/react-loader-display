const React=require('react');
const PropTypes = require('prop-types');
const $ = require('jquery');
const Styles = require('./Styling/Styles');

interface Props{
    IsLoading: boolean,
    LoadingImage: string,
    ZIndex?: number,
    LoaderMessage?:string,
    BackDropRGBA?:string,
    ForeGroundColor?:string,
    TextColor?: string,
    DisplayType?:string
}

class reactLoaderDisplay extends React.Component<Props,{}>{

    static defaultProps = {
        IsLoading: false,
        LoaderMessage: 'Please wait...',
        ZIndex: 1000,
        BackDropRGBA: 'rgba(0,0,0,0.1)',
        ForeGroundColor: 'white',
        TextColor: 'black',
        DisplayType: 'Show'
    };

    componentDidMount=()=>
    {
        let LoaderRef = $('.ReactLoaderBackDrop #LoaderModalReactLoadingDisplay85934045'); //as unique as possible to ensure the id doesn't clash with the user's code

        if (LoaderRef.length > 1) {
            console.error('react-loader-display: It seems there is a conflict. Your page already contains the same ID as the modal, which is LoaderModalReactLoadingDisplay85934045. It should not cause problems but please change this ID in your code just to be sure.');
        }
    };

    componentWillReceiveProps=(nextProps)=>{
        let DisplayType = nextProps.DisplayType;
        let IsLoading = nextProps.IsLoading;
        let LoaderRef = $('.ReactLoaderBackDrop #LoaderModalReactLoadingDisplay85934045'); //as unique as possible to ensure the id doesn't clash with the user's code

        if (IsLoading) {
            if (DisplayType === "Show") {
                LoaderRef.animate({
                    'margin-top': '150px'
                }, 1, 'swing', function () {
                    LoaderRef.show(1);
                })
            }


            if (DisplayType === "FadeIn") {
                LoaderRef.animate({
                    'margin-top': '150px'
                }, 1, 'swing', function () {
                    LoaderRef.fadeIn(500);
                })
            }

            if (DisplayType === "SlideDown") {

                LoaderRef.animate({
                    'margin-top': '0px'
                }, 1, 'swing', function () {
                    LoaderRef.show(1, function () {
                        LoaderRef.animate({
                            'margin-top': '150px'
                        }, 300)
                    });
                });
            }
        }

        if (!IsLoading) {
            LoaderRef.hide(1, function () {
                LoaderRef.animate({
                    'margin-top': '0px'
                }, 1)
            })
        }
    };

    render=()=>{
        let Style = $.extend({}, Styles);
        Style.BackdropVisible.backgroundColor = this.props.BackDropRGBA;
        Style.BackdropVisible.zIndex = this.props.ZIndex;
        Style.Modal.backgroundColor = this.props.ForeGroundColor;
        Style.LoadingText.color = this.props.TextColor;

        return (
            <div style={this.props.IsLoading ? Style.BackdropVisible : Style.LoaderHidden} className="ReactLoaderBackDrop">
                <div style={Style.Modal} id="LoaderModalReactLoadingDisplay85934045">
                    <img src={this.props.LoadingImage} style={Style.LoadingImage}/>
                    <div style={Style.LoadingText}>
                        { this.props.LoaderMessage}
                    </div>
                </div>
            </div>
        );
    }
}

reactLoaderDisplay.propTypes = {
    IsLoading: PropTypes.bool.isRequired,
    LoadingImage:PropTypes.string.isRequired,
    ZIndex:PropTypes.number,
    LoaderMessage: PropTypes.string,
    BackDropRGBA: PropTypes.string,
    ForeGroundColor: PropTypes.string,
    TextColor: PropTypes.string
};

export default reactLoaderDisplay;