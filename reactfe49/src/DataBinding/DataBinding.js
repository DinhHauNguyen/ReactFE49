import React, { Component } from 'react'

export default class DataBinding extends Component {
    // Thuộc tính 

    product = {
        id: 1,
        name: 'iphoneX',
        price: 1000,
    }
    // Phương thức 
    renderCard = () => {
        return <div class="card text-left">
            <img class="card-img-top" src="http://picsum.photos/200/200" />
            <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Body</p>
            </div>
        </div>
    }
    render() {

        // Binding data
        let title = 'hello frontend 49';
        let photo = 'http://picsum.photos/200/200';

        // Binding function 
        let renderImg = () => {
            return <img src="http://picsum.photos/200/200" />
        }
        return (
            <div>
                <h1 id="title">{title}</h1>
                <img src={photo}></img>
                <div>
                    {renderImg()}
                </div>
                {/* Binding Phương Thức */}
                <div>
                    {this.renderCard()}
                </div>
                {/* Binding Thuộc tính */}
                <div>
                    <h1>{this.product.name}</h1>
                </div>
            </div>
        )
    }
}
