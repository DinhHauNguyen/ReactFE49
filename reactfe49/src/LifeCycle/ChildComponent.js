import React, { Component } from 'react'

export default class ChildComponent extends Component {

    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {

        }
    }
    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps');
        return currentState;
    }
    render() {
        console.log('renderChild')
        return (
            <div>
                
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount Child')
    }
    componentDidUpdate(propCu,StatecCu){
        console.log('componentDidUpdate child');
    }
}

