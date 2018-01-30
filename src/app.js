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
    
    componentDidMountt(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        
        if(!isNaN(count)){
            this.setState(() => ({ count })); //es6 shorthand syntax
        }
    }
    
    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count)
        }
    }
    
    
    
    handleIncrement(){
        this.setState((prevState) => {  //here you have access to the previousState value via the first argument of the setState function
            return{
                count: prevState.count+1
            };
        });
    }
    
    handleDecrement(){
        if(this.state.count > 0){  //this will only fire if the count value is greater than 0
            this.setState((prevState) => {  //here you access to the previousState value via the first arguemnt of the setState functio
                return{
                    count: prevState.count-1
                };
            });
        }
    }
    
    handleReset(){
        this.setState(() => {
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


const appRoot = document.getElementById('react-container');
ReactDOM.render(<Counter />, appRoot);
