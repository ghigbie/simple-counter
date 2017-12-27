"use strict";

var count = 0;
var increment = function increment() {
    count++;
    renderCounterApp();
};
var decrement = function decrement() {
    count > 0 ? count-- : count = 0;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
    var template = React.createElement(
        "div",
        { className: "container" },
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { className: "btn btn-default", id: "increment", onClick: increment },
            "+1"
        ),
        React.createElement(
            "button",
            { className: "btn btn-default", id: "decrement", onClick: decrement },
            "-1"
        ),
        React.createElement(
            "button",
            { className: "btn btn-default", id: "reset", onClick: reset },
            "Reset"
        )
    );
    var appRoot = document.getElementById('react-container');
    ReactDOM.render(template, appRoot);
};

renderCounterApp();
