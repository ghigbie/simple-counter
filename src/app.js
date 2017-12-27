const count = 0;
const increment = () =>{
    count++;
}

const template = (
    <div>
        <h1>Count: {count}</h1>
        <button className="btn btn-default" id="increment" onClick={increment}></button>
        <button className="btn btn-default" id="decrement" onClick={decrement}></button>
        <button className="btn btn-default" id="reset" onClick={reset}></button>
    </div>
);

const renderCounterApp = () => {
    
};