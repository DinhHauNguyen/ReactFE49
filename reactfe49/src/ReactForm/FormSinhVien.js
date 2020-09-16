import React, { Component } from 'react'
import { connect } from 'react-redux'
import swal from 'sweetalert2'
import { themSinhVienAction, capNhatSinhVienAction } from '../redux/actions/QuanLySinhVienActions'

class FormSinhVien extends Component {

    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        }
    }

    handleChangInput = (event) => { //event : là sự kiện trên control gọi hàm này khi onchange
        let { value, name } = event.target;

        let type = event.target.getAttribute('type_')//Lấy ra một giá trị thuộc tính trên thẻ do ta dự định nghixa 

        let newValues = { ...this.state.values };//chép giá trị this.state.values ra 1 biến 
        newValues = {
            ...newValues,
            [name]: value //thay đổi giá trị bên trong của name 
        }
        let newErrors = { ...this.state.errors, [name]: value.trim() === '' ? `${name} không được bỏ trống ! ` : '' };
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (type === 'email') {
            if (!regexEmail.test(value)) {
                newErrors[name] = 'Email không hợp lệ !';
            }
        }
        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            console.log(this.state)
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();//chặn sự kiện submit của trình duyệt 

        // validation
        let valid = true;
        // Nếu value = rỗng || lỗi khác rỗng thì không hợp lệ 
        for (let key in this.state.value) {
            if (this.state.value[key].trim() === '') {
                valid = false;
            }
        }

        for (let key in this.state.errors) {
            if (this.state.errors[key].trim() !== '') {
                valid = false;
            }
        }
        if (!valid) {
            swal.fire(
                'Thất bại',
                'Dữ liệu không hợp lệ!',
                'error'
            )
            return;
        }

        const action = themSinhVienAction(this.state.values);
        // Dùng props.dispatch có sẵn khi liên kết với redux sẽ có props này => dispatch action lên reducer
        this.props.dispatch(action);
        swal.fire(
            'Thành Công',
            'Thêm sinh viên thành công!',
            'success'
        )
    }

    componentWillReceiveProps(newProps) {
        // Life Cycle chạy sua khi props thây đổi và trước khi render 
        // COmponent không chạy lại khi setState 
        // Mỗi lần nd bấm chỉnh sửa thì props thay đổi => newprops chính là props mới (state.sinhVienSua của redux) => đem props mới gán vào this.state.values
        this.setState({
            values: newProps.sinhVienSua
        })
    }
    render() {

        let sinhVienSua = this.state.values;
        return (
            <form className="container-fluid" onSubmit={this.handleSubmit}>
                <div className="card text-left">
                    <div className="card-header text-white bg-dark font-weight-bold">THÔNG TIN SINH VIÊN </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Mã sinh viên</p>
                                    <input className="form-control" name="maSinhVien" onChange={this.handleChangInput} value={sinhVienSua.maSinhVien}></input>
                                    <p className="text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <p>Tên Sinh Viên</p>
                                    <input className="form-control" name="tenSinhVien" onChange={this.handleChangInput} value={sinhVienSua.tenSinhVien}></input>
                                    <p className="text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Email</p>
                                    <input type_="email" className="form-control" name="email" onChange={this.handleChangInput} value={sinhVienSua.email}></input>
                                    <p className="text-danger">{this.state.errors.email}</p>

                                </div>
                                <div className="form-group">
                                    <p>Số điện thoại</p>
                                    <input type_="phone" className="form-control" name="soDienThoai" onChange={this.handleChangInput} value={sinhVienSua.soDienThoai}></input>
                                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-right" >
                                <button type="submit" className="btn btn-success">Thêm Sinh Viên</button>
                                <button type="button" className="btn btn-primary ml-2" onClick={()=>{
                                    // dispatch giá trị sau khi người dùng thay đổi lên redux 
                                    let action = capNhatSinhVienAction(this.state.values);
                                    this.props.dispatch(action)
                                }}>Cập Nhật Sinh Viên</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
    // componentDiđUpdate(propsCu, stateCu) {
    //     // setState trong didupdate phải có if
    //     if (this.state.sinhVienSua.maSinhVien !== propsCu.values.maSinhVien) {
    //         this.setState({
    //             value: this.props.sinhVienSua
    //         })
    //     }
    // }
}

const mapStateToProps = (state) => {
    return {
        sinhVienSua: state.QuanLySinhVienReducer.sinhVienSua
    }
}

export default connect(mapStateToProps)(FormSinhVien)
