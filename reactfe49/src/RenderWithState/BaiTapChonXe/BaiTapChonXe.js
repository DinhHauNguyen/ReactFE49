import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgCar:'./img/CarBasic/products/black-car.jpg'
    }

    handleChangeColorCar = (imgColor) => {
        // Lấy img được click gán vào state thông qua phương thức setState
        this.setState({
            imgCar:imgColor
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <img style={{ width: '100%' }} src={this.state.imgCar}></img>
                    </div>
                    <div className="col-4">
                        <div>
                            <div onClick={()=>{
                                this.handleChangeColorCar('./img/CarBasic/products/black-car.jpg')
                            }} style={{border:'1px solid #EEE', margin:'10px 0',cursor:'pointer'}} className="row">
                                <div className="col-3">
                                    <img style={{ width: '80%', display: 'block',marginTop:'20px' }} src="./img/CarBasic/icons/icon-black.jpg"></img>
                                </div>
                                <div className="col-9">
                                    <h3>Crystal Black</h3>
                                    <p>Pearl</p>
                                </div>
                            </div>
                            <div onClick={()=>{
                                this.handleChangeColorCar('./img/CarBasic/products/red-car.jpg')
                            }} style={{border:'1px solid #EEE', margin:'10px 0',cursor:'pointer'}} className="row">
                                <div className="col-3">
                                    <img style={{ width: '80%', display: 'block',marginTop:'20px' }} src="./img/CarBasic/icons/icon-red.jpg"></img>
                                </div>
                                <div className="col-9">
                                    <h3>Crystal Red</h3>
                                    <p>Metallic</p>
                                </div>
                            </div>
                            <div onClick={()=>{
                                this.handleChangeColorCar('./img/CarBasic/products/silver-car.jpg')
                            }} style={{border:'1px solid #EEE', margin:'10px 0',cursor:'pointer'}} className="row">
                                <div className="col-3">
                                    <img style={{ width: '80%', display: 'block',marginTop:'20px'}} src="./img/CarBasic/icons/icon-silver.jpg"></img>
                                </div>
                                <div className="col-9">
                                    <h3>Crystal Silver</h3>
                                    <p>Metallic</p>
                                </div>
                            </div>
                            <div onClick={()=>{
                                this.handleChangeColorCar('./img/CarBasic/products/steel-car.jpg')
                            }} style={{border:'1px solid #EEE', margin:'10px 0',cursor:'pointer'}} className="row">
                                <div className="col-3">
                                    <img style={{ width: '80%', display: 'block',marginTop:'20px' }} src="./img/CarBasic/icons/icon-steel.jpg"></img>
                                </div>
                                <div className="col-9">
                                    <h3>Crystal Steel</h3>
                                    <p>Metallic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

