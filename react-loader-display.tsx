const React = require('react');
const $ = require('jquery');
const Styles = require('./Styling/Styles');

interface Props {
    IsLoading: boolean;
    LoadingImage: string;
    ZIndex?: number;
    LoaderMessage?: string;
    BackDropRGBA?: string;
    ForeGroundColor?: string;
    TextColor?: string;
    DisplayType?: string;
}

interface State{
    IsLoading:false
}

class reactLoaderDisplay extends React.Component<Props, State> {

    static defaultProps = {
        IsLoading: false,
        LoaderMessage: 'Please wait...',
        ZIndex: 1000,
        BackDropRGBA: 'rgba(0,0,0,0.1)',
        ForeGroundColor: 'white',
        TextColor: 'black',
        DisplayType: 'Show'
    };

    ShowLoading = () => {
        this.setState({
            IsLoading:true
        },()=>{
            this.HandleShowHide(this.props.DisplayType, true);
        });
    };

    HideLoading = () => {

        this.setState({
            IsLoading:false
        },()=>{
            this.HandleShowHide(this.props.DisplayType, false);
        });
    };

    HandleShowHide(DisplayType: string, IsLoading: boolean) {

        let LoaderRef = $('#LoaderModalReactLoadingDisplay85934045'); //as unique as possible to ensure the id doesn't clash with the user's code

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
    }

    componentWillMount=()=>{
        this.setState({
            IsLoading:this.props.IsLoading
        })
    };

    componentWillReceiveProps = (nextProps) => {
        let DisplayType = nextProps.DisplayType;
        let IsLoading = nextProps.IsLoading;
        this.HandleShowHide(DisplayType, IsLoading);
    };

    componentDidMount = () => {
        let BackDropLoaderRef = $('.ReactLoaderBackDrop'); //as unique as possible to ensure the id doesn't clash with the user's code
        let LoaderRef = $('#LoaderModalReactLoadingDisplay85934045');

        if (LoaderRef.length > 1) {
            alert('react-loader-display: It seems there is a conflict. Your page already contains the same ID as the modal, which is LoaderModalReactLoadingDisplay85934045.');
            return;
        }

        if (BackDropLoaderRef.length > 1) {
            alert('react-loader-display: It seems there is a conflict. Your page already contains the same class as the modal, which is ReactLoaderBackDrop.');
            return;
        }
    };
    

    render = () => {
        let Style = $.extend({}, Styles);
        Style.BackdropVisible.backgroundColor = this.props.BackDropRGBA;
        Style.BackdropVisible.zIndex = this.props.ZIndex;
        Style.Modal.backgroundColor = this.props.ForeGroundColor;
        Style.LoadingText.color = this.props.TextColor;

        return (
            <div style={this.state.IsLoading ? Style.BackdropVisible : Style.LoaderHidden} className="ReactLoaderBackDrop">
                <div style={Style.Modal} id="LoaderModalReactLoadingDisplay85934045">
                    <img src={this.props.LoadingImage} style={Style.LoadingImage}/>
                    <div style={Style.LoadingText}>
                        {this.props.LoaderMessage}
                    </div>
                </div>
            </div>
        );
    }
}

export default reactLoaderDisplay;