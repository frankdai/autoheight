# AutoHeight.js

This is a very small function/plugin which is used for controlling element height in order to keep the element "asepct ratio" when the width is variable across device and changable by the user, i.e. in mobile browser.

To use this plugin, simply put the code inside your JS file (it is only 29 lines uncompressed) and call that plugin in two ways: 

---
```javascript
AutoHeight()
```

In this way, you have to markup your HTML like this

```html
<div class="autoheight" data-autoheightratio="1" data-includingborder="false"></div>
```

The class name must contain "autoheight". The other data attributes are optional. 

 * data-autoheightratio attribute control the ration between height/width. Default value is 1(square)
 * data-includingborder attribute determine whether to include the border for calculation. default value is true. If this attribute is not presented, the calculation will include the border

---

Another way of doing this is to evoke the function via individual element without touching its HTML markup:

```javascript
  var div=new AutoHeight(document.getElementById('div'));
  div.controlHeight(0.4,false);
```

The controlHeight method accept two arguments which are similar to data-attribute mentioned in the first usage. 

Please note that this plugin control the height via CSS and it will set the size of box model as per box-sizing declaration in CSS. Also we suggest you to add resize event listner for window so it will change corrspondingly when viewport changes. 

```javascript
window.addEventListener('resize',function(){
    AutoHeight();
    div.controlHeight(0.75);
},true);
```
