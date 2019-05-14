import React, {Component} from "react"
export default class Sum extends Component{
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        };
    }
    handleChange1(val){
        this.setState({number1:val})
    }
    handleChange2(val){
        this.setState({number2:val})
    }
    addition(val1,val2){
        let total = Number(val1) + Number(val2);
        this.setState({sum : total})
    }
    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>sum</h4>
                <input className="inputLine" onChange={(e) => this.handleChange1(e.target.value)}></input>
                <input className="inputLine" onChange={(e) => this.handleChange2(e.target.value)}></input>
                <button className="confirmationButton" onClick = {() => this.addition(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">total: {this.state.sum}</span>
            </div>
        )
    }
}
