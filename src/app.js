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

const renderCounterApp = () => {
    const template = (
        <div className="container">
            <h1>Count: {count}</h1>
            <button className="btn btn-default" id="increment" onClick={increment}>+1</button>
            <button className="btn btn-default" id="decrement" onClick={decrement}>-1</button>
            <button className="btn btn-default" id="reset" onClick={reset}>Reset</button>
        </div>
    );
    const appRoot = document.getElementById('react-container');
    ReactDOM.render(template, appRoot);
};

renderCounterApp();