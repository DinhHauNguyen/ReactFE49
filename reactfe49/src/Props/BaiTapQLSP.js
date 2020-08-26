import React, { Component } from 'react'

export default class BaiTapQLSP extends Component {

    state = {
        sanPhamChiTiet: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" }
    }


    renderSanPham = () => {
        return this.props.mangSP.map((product, index) => {
            return <div className="card text-left col-3" key={index} >
                <img className="card-img-top" style={{height:250}} src={product.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <p className="card-text">{product.gia}</p>
                    <button onClick={()=>{
                        this.xemChiTiet(product)
                    }} className="btn btn-success">Xem chi tiết</button>
                </div>
            </div>

        });
    }

    xemChiTiet = (spClick) => {
            this.setState({
                sanPhamChiTiet:spClick
            })
    }
    render() {
        let{maSP,tenSP,hinhAnh,manHinh,cameraTruoc,cameraSau,heDieuHanh,gia,ram,rom} = this.state.sanPhamChiTiet;
        return (
            <div className="container" >
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <hr/>
                <div className="row">
                    <div className="col-4">
                        <h3 className="text-center">IPHONE X</h3>
                        <img src={hinhAnh} style={{width:'100%'}} alt={hinhAnh}></img>
                    </div>
                    <div className="col-8">
                        <h3>Thông số kĩ thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera Sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <th>{rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
