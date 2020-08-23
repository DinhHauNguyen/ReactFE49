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
        })
        return arrJSXProduct;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>

        )
    }
}
