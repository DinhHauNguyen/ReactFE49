import React, { Component } from 'react'
import './Styling.scss'
import style from './Styling.module.scss';

export default class Child extends Component {
    render() {
        return (
            <div>
                <div className={`${style.content}`}>
                    <p className={`${style.text}`}>1234</p>
                    child component
                </div>
                <p className={`${style.text}`}>44444</p>
                <p style={{borderColor:'red',backgroundColor:'green'}}>
                    HELLO EVERYBODY
                </p>
            </div>
        )
    }
}
