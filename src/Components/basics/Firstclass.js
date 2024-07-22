import React from "react";

class Firstclass extends React.Component{
    constructor(){
        super();
        this.state ={
        color: red
        }
    }
    render(){
        const {info} = this.props;
        const{item1,item2} =this.props;
return(
    <div>
        <h2>Firstclass page is here</h2>
        <p>{this.state.color}</p>
        <button onClick={this.setState({color: blue})}>Colorchange</button>
    </div>
)
    }
}

export default Firstclass;