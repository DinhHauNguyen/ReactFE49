import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {
    renderXucXac = () => {
        const {mangXucXac} = this.props;
        return mangXucXac.map((xucXac,index)=>{
            return <img key={index} className="ml-5" style={{width:50,borderRadius:8}} src={xucXac.hinhAnh}></img>
        })
    }
    render() {
        const {banChon} = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 text-center">
                        <button onClick={()=>{
                            this.props.datCuocTaiXiu(true)
                        }} style={{backgroundColor:'white',border: banChon ? '3px solid red': 'none',padding:'30px',fontSize:'40px' }} className="btn display-4 text-danger">TÀI</button>
                    </div>
                    <div className="col-6 text-center">
                        {this.renderXucXac()}
                        {/* <img className="ml-5" style={{width:50,borderRadius:8}} src="./img/gamexucxac/1.png"></img>
                        <img className="ml-5" style={{width:50,borderRadius:8}} src="./img/gamexucxac/1.png"></img>
                        <img className="ml-5" style={{width:50,borderRadius:8}} src="./img/gamexucxac/1.png"></img> */}
                    </div>
                    <div className="col-3 text-center">
                        <button onClick={()=>{
                            this.props.datCuocTaiXiu(false)
                        }} style={{backgroundColor:'white',border:!banChon ? '3px solid red': 'none', padding:'30px',fontSize:'40px'}} className="btn display-4 text-danger">XỈU</button>
                    </div>
                </div>
            </div>
        )
    }
}
// Lấy dữ liệu từ redux veef 
const mapStateToProps = (state) => {
    return {
        mangXucXac: state.stateGameXucXac.mangXucXac,
        banChon: state.stateGameXucXac.banChon
    }
}
// Tạo ra props đưa dữ liệu lên redux Store
const mapDispatchToProps = (dispatch) => {
    return {
        datCuocTaiXiu: (ketQuaChon) => {
            console.log('ketQuaChon',ketQuaChon);
            const action = {
                type: 'DAT_CUOC_TAI_XIU', // Phải khác tên đối với các type nghiệp vụ khác 
                ketQuaChon
            }
            //Đưa action lên tất cả reducer
            dispatch(action);
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(XucXac) 
