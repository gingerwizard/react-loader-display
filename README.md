# react-loader-display
 A simple customizable ReactJS component that allows a developer to display a loading modal.
 
 **Usage:**
 
 Install with npm:
 
 npm install --save react-loader-display
 
 **Use in your code:**
 
 **Version 2.x:**
 
 var Loader=require('react-loader-display');
 
 **Version 3.x and above:**
 
 var Loader=require('react-loader-display').loader;
 
 **Version 2.x and above:**
 
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
 
 **Version 3.1.0 and above:**
 
 Two extra features have been added since version 3.1.x.
 
 The two features make it possible to display and hide the loading modal without using the "IsLoading" prop on the on the React component.
  
 Usage:
 
    <Loader 
       ref="ReactLoaderDisplayRef"
       IsLoading={true} 
       LoadingImage="example_image.gif" 
       ZIndex={100} 
       LoaderMessage="Loading..." 
       BackDropRGBA="rgba(0,0,0,0.2)"
       ForeGroundColor="white" 
       TextColor="black"
       DisplayType="FadeIn"
       />

Now you can show or hide the modal as follows:

       this.refs.ReactLoaderDisplayRef.ShowLoading();
       this.refs.ReactLoaderDisplayRef.HideLoading();
       
 Ref prop:
 * This is a normal "ref" prop as per React's built-in functionality.
 * A ref makes it possible to target a React component using javascript
 * The ref can be any string you want to use, as long as it's referenced correctly
       
  
  
  
  
 
 
 
