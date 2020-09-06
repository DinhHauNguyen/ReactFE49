import React, { Component } from 'react'
// Kết nối redux
import { connect } from 'react-redux'

 class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.gia.toLocaleString()}</p>
                        <button className="btn btn-success" onClick ={()=>{
                            this.props.themGioHang(sanPham);
                        }}>
                            Thêm sản phẩm 
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) =>{ // dispatch là hàm giống setState
    return {
        themGioHang : (sanPhamClick) => {
            console.log ('sanPhamClick',sanPhamClick)
            const action = {
                type : 'THEM_GIO_HANG',//đây là thuộc tính bắt buộc 
                sanPham:sanPhamClick //Nội dung đưa lên store của redux 
            }
            // Dùng hàm dispatch gửi action  lên redux
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(SanPhamRedux)
