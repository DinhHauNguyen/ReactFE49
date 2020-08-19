import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = () => {
        alert('hello');
    }

    showInfo = (name) => {
        alert(`Name: ${name}`);
    }

    render() {
        return (
            <div className="container">
                {/* Cách1:Truyền callback function thông qua thuôjc tính*/}
                <button onClick={this.handleClick}>Click Me</button>
                <br/>

                <button onClick={this.showInfo.bind(this,'Hello Word')}>Click</button>

                {/* Cách 2 : Dùng arrow function  */}
                <button onClick={() => {
                    alert('hihihi');
                    // Có thể gọi nhiều hàm 
                    this.handleClick();
                }}>Show Message</button>
                {/* Sử lí sự kiện */}
                <button onClick={() => {
                    this.showInfo('Hello Hậu')
                }}>Show Info</button>
            </div>
        )
    }
}
