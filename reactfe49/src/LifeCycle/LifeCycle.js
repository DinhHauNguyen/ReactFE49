import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import Header from './Header';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            sinhVien: {
                id: 1,
                name: 'Nguyen Van A'
            }//giá trị là object ,
            ,
            number: 1,
        }
    }
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return currentState;
    }

    shouldComponentUpdate(newsProps, newState) {
        return true;
    }

    render() {
        console.log('render component cha')
        return (
            <div className="container">
                <h1>{this.state.sinhVien.name}</h1>
                <button onClick={() => {
                    let sinhVien = this.state.sinhVien;
                    sinhVien.name = 'Nguyễn Văn B';
                    this.setState({
                        sinhVien: sinhVien
                    })
                }}>+</button>
                <ChildComponent></ChildComponent>
                <h1>{this.state.number}</h1>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>setNumber</button>
                {this.state.number < 3 ? <Header sinhVien={this.state.sinhVien}></Header> : ''}
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentDidUpdate(propCu, StatecCu) {
        console.log('componentDidUpdate');
    }
}
