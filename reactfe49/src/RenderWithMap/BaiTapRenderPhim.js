import React, { Component } from 'react'
import data from './DataFilms.json';

export default class BaiTapRenderPhim extends Component {

    renderFilm = () => {
        return data.map((product, index) => {
            // return <div className="col-4" key={index}>
            //     <div class="card text-left">
            //         <img class="card-img-top" src="http://picsum.photos/200/200" alt={product.name} />
            //         <div class="card-body">
            //             <h4 class="card-title">{product.name}</h4>
            //             <p class="card-text">{product.price}</p>
            //         </div>
            //     </div>
            // </div>
            return <div className="col-2" key={index}>
                <div className="card bg-dark ml-3 mr-3" style={{width:'250'}}>
                    <img className="card-img-top" src={product.hinhAnh} style={{ height: 300 }} alt={product.hinhAnh} />
                    <div className="card-body text-light">
                        <h4 className="card-title" style={{ height:50 }}>{product.tenPhim.length > 20 ? <span>{product.tenPhim.substr(0, 20)} ... </span> : <span>{product.tenPhim}</span>} </h4>
                        <p className="card-text" style={{ height:75 }}>{product.moTa.length > 75 ? <span>{product.moTa.substr(0, 75)} ...</span> : product.moTa}</p>
                    </div>
                </div>
            </div>
        });
    }


    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a href="#" className="navbar-brand">CYBERLEARN-MOVIE</a>
                            <button className="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="myMenu">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link active">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Film</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link" data-toggle="dropdown">Dropdown</a>
                                        <div className="dropdown-menu">
                                            <a href="#" className="dropdown-item">Film</a>
                                            <a href="#" className="dropdown-item">Time</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div style={{ backgroundImage: 'url("./img/avanger.jpg")', backgroundSize: '200%', width: '100%', minHeight: 1000, backgroundRepeat: 'no-repeat' }}>
                    
                    <h2 className="text-center text-light mg-40">DANH SÁCH PHIM</h2>
                    <div className="row">
                        {this.renderFilm()}
                    </div>
                </div>
            </div>
        )
    }
}
