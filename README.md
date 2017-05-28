# react-loader-display
 A simple customizable ReactJS component that allows a developer to display a loading modal.
 
 **Usage:**
 
 Install with npm:
 
 npm install --save react-loader-display
 
 Use in your code:
 
 var Loader=require('ajax-loader-display');
 
 In your ReactJS application you can insert it as follows (not all the props are required):
 
    <Loader 
      IsLoading={true} 
      LoadingImage="example_image.gif" 
      ZIndex={100} 
      LoaderMessage="Loading..." 
      BackDropRGBA="rgba(0,0,0,0.2)"
      ForeGroundColor="white" 
      TextColor="black"
      DisplayType="FadeIn"
      />
 
 **Required props:**
 *  IsLoading - true (display modal) or false (hide modal).
 *  LoadingImage - the url of the image you would like to display as the loading gif, svg etc.
 
 **Optional props:**
 *  ZIndex - the css z-index of the backdrop and modal. Defaults to 1000.
 *  LoaderMessage - the text to display. Defaults to "Please wait...".
 *  BackDropRGBA - The rgba colour of the modal parent ie. the background. Defaults to "rgba(0,0,0,0.1)".
 *  ForeGroundColor - The background colour of the modal. Defaults to "white".
 *  TextColor - The colour of the text string displayed to the user. Defaults to "black".
 * DisplayType- Options are "Show","FadeIn" and "SlideDown". Defaults to "Show"
 
