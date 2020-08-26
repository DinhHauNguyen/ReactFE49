import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList = [
        { id: 1, name: 'Iphone X', price: 1000 },
        { id: 2, name: 'Samsung Note 10 Plus', price: 3000 },
        { id: 3, name: 'HTC m10', price: 2000 },
    ]
    renderProduct = () => {
        // let content = [];
        // for (let i = 0; i < this.productList.length; i++) {
        //     let product = this.productList[i];
        //     let cardProduct =
        //         <div>
        //             <div class="card text-left">
        //                 <img class="card-img-top" src="holder.js/100px180/" />
        //                 <div class="card-body">
        //                     <h4 class="card-title">{product.name}</h4>
        //                     <p class="card-text">{product.price}</p>
        //                 </div>
        //             </div>
        //         </div>;

        //     content.push(cardProduct);
        // }
        // console.log(content)

        let arrJSXProduct = this.productList.map((product, index) => {
            return <div className="col-4" key={index}>
                <div class="card text-left">
                    <img class="card-img-top" src="http://picsum.photos/200/200" alt={product.name} />
                    <div class="card-body">
                        <h4 class="card-title">{product.name}</h4>
                        <p class="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        });

        return arrJSXProduct;
    }
    renderTable = () => {
        return this.productList.map((product, index) => {
            return <tr key={index}> 
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <button className="text-danger">Xoá</button>
                </td>
            </tr>

        });
    }

    render() {
        return (
            <div className="container">
                {/* <div className="row">
                    {this.renderProduct()}
                </div> */}
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.renderTable()}
                    </tbody>
                </table>
            </div>

        )
    }
}
