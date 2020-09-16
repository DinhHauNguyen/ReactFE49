import React, { PureComponent } from 'react'

export default class Header extends PureComponent {


    render() {
        console.log('header render')
        return (
            <div>
                <h1>Header render :{this.props.sinhVien.name}</h1>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a href="#" className="nav-link active">Active</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">Action</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Another link</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link disabled">Disabled</a>
                    </li>
                </ul>

            </div>
        )
    }
    componentWillUnmount(){
        // Chạy trước khi component mất khỏi giao diện 
        console.log ('componentWillUnmount header')
    }
}
