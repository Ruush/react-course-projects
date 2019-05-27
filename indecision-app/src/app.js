console.log("App.js is running!")

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the gands of a computer"
};

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>§
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: "Gabriel",
    age: 18,
    location: "Jaçana"
};
function getlocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
};
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getlocation(user.location)}
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);