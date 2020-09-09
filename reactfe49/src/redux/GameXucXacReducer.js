// Tổ chức reducer để lưu trữ và xử lý state của bài tập game xúc xắc
const mangXucXac = [
    {ma:1,hinhAnh:'./img/gamexucxac/1.png'},
    {ma:2,hinhAnh:'./img/gamexucxac/2.png'},
    {ma:3,hinhAnh:'./img/gamexucxac/3.png'},
    {ma:4,hinhAnh:'./img/gamexucxac/4.png'},
    {ma:5,hinhAnh:'./img/gamexucxac/5.png'},
    {ma:6,hinhAnh:'./img/gamexucxac/6.png'},
]


const stateDefault = {
    banChon:true,
    soBanThang:0,
    tongSoBanChoi:0,
    mangXucXac: [
        {ma:1,hinhAnh:'./img/gamexucxac/1.png'},
        {ma:2,hinhAnh:'./img/gamexucxac/2.png'},
        {ma:3,hinhAnh:'./img/gamexucxac/3.png'},
    ]
}

export const GameXucXacReducer = (state = stateDefault,action) => {

    switch(action.type){
        case 'DAT_CUOC_TAI_XIU':{
            state.banChon = action.ketQuaChon;
            return{...state}
        }
        case 'PLAY_GAME':{
            // Tạo ra 3 viên xúc xắc ngẫu nhiên add vàp mảng xúc xắc ngẫu nhiên
            let mangXucXacNgauNhien = [];
            // Thực hiện random 3 lần để tạo ra 3 viên xúc xắc ngẫu nhiên đưa vào mảng 
            for (let i=0;i<3;i++){
                let soNgauNhien = Math.floor(Math.random() * 6);
                // Từ ngẫu nhiên tạo ra  xúc xắc ngẫu nhiên 
                let xucXacNgauNhien = mangXucXac[soNgauNhien];
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            // Cập nhật lại state.mangXucXac
            state.mangXucXac = mangXucXacNgauNhien;
            // Cập nhật số bàn  chơi 
            state.tongSoBanChoi += 1;

            // Tính điểm từ mangXucXacNgauNhien
            let tongDiem = mangXucXacNgauNhien.reduce((tongDiem,xxnn,index)=>{
                return tongDiem += xxnn.ma;
            },0);
            // So sánh tongDiem
            // Nếu tôneg diểm lớn hơn 9 và banChon = true => thắng 
            // Hoặc nếu tổng điểm <= 9 và banChon = false => thua
            if ((tongDiem > 9 && state.banChon) || (tongDiem <= 9 && !state.banChon) ){
                state.soBanThang += 1;
            }
            return {...state};
        }
    }

    return{...state};
}