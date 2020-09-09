import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        const { banChon, soBanThang, tongSoBanChoi } = this.props
        console.log(this.props.banChonCom)
        return (
            <div>
                <div className="display-4 text-center">
                    BẠN CHỌN : <span className="text-danger">{banChon ? 'TÀI' : 'XỈU'}</span>
                </div>
                <div className="display-4 text-center">
                    SỐ BÀN THẮNG : <span className="text-success">{soBanThang}</span>
                </div>
                <div className="display-4 text-center">
                    TỔNG SỐ BÀN CHƠI : <span className="text-warning">{tongSoBanChoi}</span>
                </div>
                <div className="mt-5 text-center">
                    <button onClick={()=>{
                        this.props.playGame()
                    }} className="p-3 btn bg-light text-danger">PLAY GAME</button>
                </div>
            </div>
        )
    }
}
// hàm lấy giá trị từ state redux về biến đổi thàng props của component
const mapStateToProps = (state) => { // State là giá trị từ rootReducer truyền vào component
    return {
        // tên bên trái có thể đặt khác cùnxg được 
        banChon: state.stateGameXucXac.banChon,
        soBanThang: state.stateGameXucXac.soBanThang,
        tongSoBanChoi: state.stateGameXucXac.tongSoBanChoi
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({
                type:'PLAY_GAME'
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(KetQuaTroChoi)
