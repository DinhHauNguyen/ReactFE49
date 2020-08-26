import React, { Component } from 'react'

export default class ThongTinSinhVien extends Component {

    // this.props: là thuộc tính có sẵn của component,lưu ý : dùng để nhận giá trị từ component cha truyền vào, và không thay đổi giá trị đó 
   

    render() {
        return (
            <div>
                <p>Họ tên:{this.props.sinhVien.hoTen}</p>
                <p>Lớp:{this.props.sinhVien.lop}</p>
            </div>
        )
    }
}
