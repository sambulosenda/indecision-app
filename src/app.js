console.log("app.js is running");

var ap = {
  title: "Indecision App",
  subtitle: "This is some info",
  options :['one','Two']
};

var template = (
  <div>
    <h1>{ap.title}</h1>
    <h2>{ap.subtitle ? ap.subtitle : "No subtitle"}</h2>
    <p>{ap.options.length > 0 ? 'Here are your options': 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  Name: "Sambulo Senda",
  age: 18,
  Location: "London"
};

//if statement to get location and unkbbowsn
function getLocation(Location) {
  if (Location) {
    return <p>Location: {Location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.Name ? user.Name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age : {user.age}</p>}
    {getLocation(user.Location)}
  </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
