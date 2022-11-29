import React from "react";
import ReactDom from "react-dom"; // Import isntead of const or var, from and not require - new method

ReactDom.render(
  <div>
    <h1>Hello World</h1>
    <p> this is a paragraph</p>
  </div>,
  document.getElementById("root")
); //what we are wanting to render, where we are rendering to using ID - can only take one line of HTML
//using Div we can then only contain more than one html element.
