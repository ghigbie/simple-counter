class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: parseInt(localStorage.getItem('count'), 10)
        };
    }
    
    handleIncrement(){
        let count = parseInt(localStorage.getItem('count'), 10) + 1;
        localStorage.setItem('count', count);
        this.setState(() => {  //here you have access to the previousState value via the first argument of the setState function
            return{
                count: count
            };
        });
    }
    
    handleDecrement(){
        if(parseInt(localStorage.getItem('count'), 10) > 0){
            let count = parseInt(localStorage.getItem('count'), 10) -1;
            localStorage.setItem('count', count);
        }
        if(this.state.count > 0){  //this will only fire if the count value is greater than 0
            this.setState(() => {  //here you access to the previousState value via the first arguemnt of the setState functio
                return{
                    count: count
                };
            });
        }
    }
    
    handleReset(){
        localStorage.clear();
        let count = 0;
        localStorage.setItem('count', count);
        this.setState(() => {
            return{
                count: count
            };
        });
    }
    
    render(){
        return(
            <div className="container">
                <h1>Count: {this.state.count}</h1>
                <button className="btn btn-default"
                        onClick={this.handleIncrement}
                        id="increment">+1</button>
                <button className="btn btn-default"
                        onClick={this.handleDecrement}
                        id="decrement">-1</button>
                <button className="btn btn-default"
                        onClick={this.handleReset}
                        id="reset">Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

const appRoot = document.getElementById('react-container');
ReactDOM.render(<Counter />, appRoot);
