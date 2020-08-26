import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class DemoProps extends Component {

    sinhVien ={
        hoTen: 'Nguyễn Văn Tèo',
        lop:'2'
    }
    render() {
        return (
            <div className="container">
                <ThongTinSinhVien sinhVien={this.sinhVien}></ThongTinSinhVien>
            </div>
        )
    }
}