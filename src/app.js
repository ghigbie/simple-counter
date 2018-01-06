const appRoot = document.getElementById('react-container');

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    
    handleIncrement(){
        console.log('handleIncrement was called');
        this.setState((prevState) => {
           return{
                count: prevState.count +1
           }; 
        });
    }
    
    handleDecrement(){
        console.log('handleDecrement was called');
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
        console.log('handleReset was called');
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

const renderApp = () => {
    ReactDOM.render(<Counter />, appRoot);
};

renderApp();
