// Quản lí tất cả state của ứng dụng 
import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer';
import {GameXucXacReducer} from './GameXucXacReducer'
import QuanLySinhVienReducer from './QuanLySinhVienReducer';


export const rootReducer = combineReducers({
    // Khai báo các state của ứng dụng 
    GioHangReducer:GioHangReducer,
    stateGameXucXac: GameXucXacReducer,
    QuanLySinhVienReducer: QuanLySinhVienReducer,
})