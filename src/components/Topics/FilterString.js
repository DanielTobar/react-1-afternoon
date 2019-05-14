import React, {Component} from "react"
export default class FilterString extends Component{
    constructor(){
        super();

        this.state ={
            unFilteredArray :["Daniel", "Billi", "Maggi", "Mariana", "Juliana"],
            userInput : "",
            filteredArray : []
        }
    }
    handleChange(val){
        this.setState({userInput:val});
    }
    arrayFilter(prop){
        let data = this.state.unFilteredArray;
        let filtered = []

        for(let i = 0 ; i < data.length ; i++){
            if(data[i].includes(prop)){
                filtered.push(data[i]);
            }
        }
        this.setState({filteredArray : filtered})
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4  >filter string</h4>
                <span  className="puzzleText">string array: {JSON.stringify(this.state.unFilteredArray)} </span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.arrayFilter(this.state.userInput)} >Filter</button>
                <span className="resultsBox filterStringRB">filtered array: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}