import {THEM_SINH_VIEN} from "./types/QuanLySinhVienTypes";
const initialState = {
    mangSinhVien: [
        {maSinhVien:1,tenSinhVien:'Nguyễn Văn A', soDienThoai:909090909,email:'nguyenvana@gmail.com'},

        {maSinhVien:2,tenSinhVien:'Nguyễn Văn B', soDienThoai:980808080,email:'nguyenvanb@gmail.com'}
    ]
}

export default (state = initialState,action) => {
    switch (action.type) {
        case THEM_SINH_VIEN:{
            state.mangSinhVien = [...state.mangSinhVien,action.sinhVien];
            return { ... state}
        }
    default:return {...state}
    }
}
