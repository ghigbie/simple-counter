const appRoot = document.getElementById('react-container');

class Counter extends React.Component{
    increment(){
        this.count++;
        renderApp();
    }
    
    decrement(){
        this.count--;
        renderApp();
    }
    
    reset(){
        this.count = 0;
        renderApp();
    }
    
    render(){
        return(
            <div className="container">
                <h1>Count: </h1>
                <button className="btn btn-default" 
                        id="increment"
                        onClick={this.increment}>+1</button>
                <button className="btn btn-default" 
                        id="decrement"
                        onClick={this.decrement}>-1</button>
                <button className="btn btn-danger" 
                        id="reset"
                        onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

const renderApp = () => {
    ReactDOM.render(<Counter />, appRoot);
};

renderApp();


// let count = 0;
// const increment = () => {
//     count++;
//     renderCounterApp();
// };
// const decrement = () => {
//     count > 0 ? count-- : count = 0;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const renderCounterApp = () => {
//     const template = (
//         <div className="container">
//             <h1>Count: {count}</h1>
//             <button className="btn btn-default" id="increment" onClick={increment}>+1</button>
//             <button className="btn btn-default" id="decrement" onClick={decrement}>-1</button>
//             <button className="btn btn-default" id="reset" onClick={reset}>Reset</button>
//         </div>
//     );
//     const appRoot = document.getElementById('react-container');
//     ReactDOM.render(template, appRoot);
// };

// renderCounterApp();