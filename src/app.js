let count = 0;
const increment = () => {
    count++;
    renderCounterApp();
};
const decrement = () => {
    count > 0 ? count-- : count = 0;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const template = (
    <div>
        <h1>Count: {count}</h1>
        <button className="btn btn-default" id="increment" onClick={increment}></button>
        <button className="btn btn-default" id="decrement" onClick={decrement}></button>
        <button className="btn btn-default" id="reset" onClick={reset}></button>
    </div>
);

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button className="btn btn-default" id="increment" onClick={increment}></button>
            <button className="btn btn-default" id="decrement" onClick={decrement}></button>
            <button className="btn btn-default" id="reset" onClick={reset}></button>
        </div>
    );
    const appRoot = document.getElementById('react-container');
    ReactDOM.render(template, appRoot);
};

renderCounterApp();