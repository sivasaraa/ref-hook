import React, { Component } from 'react'

class ClassTimer extends Component{
    constructor(props){
        super(props)
        this.state = {
            timer : 0
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState((prevState) => {
               return { timer : prevState.timer + 1 }
            })
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        return (
            <div>Timer - {this.state.timer}</div>
        )
    }
}

export default ClassTimer