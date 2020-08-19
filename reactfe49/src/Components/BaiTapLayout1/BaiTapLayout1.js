import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'
import Footer from './Footer'
export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="row">
                    <div className="col-2 p-0">
                        <Menu></Menu>
                    </div>
                    <div className="col-10 p-0">
                    </div>
                        <Content></Content>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
