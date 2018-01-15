const appRoot = document.getElementById('react-container');

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }
    
    handleIncrement(){
        this.setState((prevState) => {
           return{
                count: prevState.count +1
           }; 
        });
    }
    
    handleDecrement(){
        if(this.state.count > 0){
            this.setState((prevState) => {
                return{
                    count: prevState.count -1
                };
            });
        }
    }
    
    handleReset(){
        this.state.count = 0;
        this.setState(() =>{
          return{
              count: 0
          };  
        });
    }
    
    render(){
        return(
            <div className="container">
                <h1>Count: {this.state.count}</h1>
                <button className="btn btn-default" 
                        id="increment"
                        onClick={this.handleIncrement}>+1</button>
                <button className="btn btn-default" 
                        id="decrement"
                        onClick={this.handleDecrement}>-1</button>
                <button className="btn btn-danger" 
                        id="reset"
                        onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

const renderApp = () => {
    ReactDOM.render(<Counter />, appRoot);
};

renderApp();
