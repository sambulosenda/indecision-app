"use strict";

console.log("app.js is running");

//JSX - JAVASCRIPT XML

var ap = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: ['one', 'Two']
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    ap.title
  ),
  React.createElement(
    "h2",
    null,
    ap.subtitle ? ap.subtitle : "No subtitle"
  ),
  React.createElement(
    "p",
    null,
    ap.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var user = {
  Name: "Sambulo Senda",
  age: 18,
  Location: "London"
};

//if statement to get location and unkbbowsn
function getLocation(Location) {
  if (Location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      Location
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.Name ? user.Name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age : ",
    user.age
  ),
  getLocation(user.Location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
