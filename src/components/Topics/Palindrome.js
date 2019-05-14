import React,{Component} from "react"
export default class Palindrome extends Component{
    constructor(){
        super();

        this.state ={
            userInput :[],
            Palindrome: ''
        }
    }
    
    handleChange(val){
        this.setState({userInput: val});
    }
    tester(prop){
        let splitIt = prop.split("");
        let reverseIt = splitIt.reverse();
        let joinIt = reverseIt.join("")
         if(prop == joinIt){
            this.setState({palindrome: "true"})
         }
         else {
            this.setState({palindrome: "false"})
         };
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input  className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.tester(this.state.userInput)}>Inverse</button>
                <span className="resultsBox">palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}