import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import { connect } from 'react-redux'

class DanhSachSinhVien extends Component {
    render() {
        return (
            <div>
                <FormSinhVien></FormSinhVien>
                <div className="container-fluid">
                    <table className="table text-light">
                        <thead className="bg-dark">
                            <tr>
                                <th>Mã Sinh Viên</th>
                                <th>Tên Sinh Viên</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="bg-light text-dark">
                            {this.props.mangSinhVien.map((sinhVien, index) => {
                                return <tr key={index}>
                                    <td>
                                        {sinhVien.maSinhVien}
                                    </td>
                                    <td>
                                        {sinhVien.tenSinhVien}
                                    </td>
                                    <td>
                                        {sinhVien.email}
                                    </td>
                                    <td>
                                        {sinhVien.soDienThoai}
                                    </td>
                                    <td>
                                        <button className="btn btn-warning mr-2">Chỉnh sửa</button>
                                        <button className="btn btn-danger mr-2">Xoá</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateTopProps = (state) => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}
export default connect(mapStateTopProps)(DanhSachSinhVien)
