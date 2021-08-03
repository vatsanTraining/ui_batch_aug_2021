import React, { Component } from 'react'
import State ,{Country} from '../model/State'

export default class ShowFlag extends Component<Country,State> {
    
    constructor(props:Country){

        super(props);
        this.state ={
            claps:1
        }

    }

    handleClick = (event:React.MouseEvent<HTMLElement>)=>{
            console.log(event.currentTarget.tagName);
                       this.setState({claps:this.state.claps+1})
   }
   
    render() {
        return (
            <div>
                <p>{this.props.countryName}</p>
                <p>{this.state.claps}</p>
                <button onClick={this.handleClick}>Clap</button>
            </div>
        )
    }
}
