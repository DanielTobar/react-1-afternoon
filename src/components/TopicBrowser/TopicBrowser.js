import React, {Component} from "react"
import Sum from "/Users/admin/Desktop/react/react-1-afternoon/src/components/Topics/Sum.js"
import Palindrome from "/Users/admin/Desktop/react/react-1-afternoon/src/components/Topics/Palindrome.js"
import FilterString from "/Users/admin/Desktop/react/react-1-afternoon/src/components/Topics/FilterString.js"
import FilterObject from "/Users/admin/Desktop/react/react-1-afternoon/src/components/Topics/FilterObject.js"
import EvenAndOdd from "/Users/admin/Desktop/react/react-1-afternoon/src/components/Topics/EvenAndOdd.js"
//basic component
//                                  Inherit the 'Components' method
//       is exporting as default     |
//        |                          |
//        V                          V
export default class TopicBrowser extends Component{
    render(){
        return(
                <div>
                    <Sum/>
                    <Palindrome/>
                    <FilterString/>
                    <FilterObject/>
                    <EvenAndOdd/>
                </div>
        )
    }
}
//  /basic component