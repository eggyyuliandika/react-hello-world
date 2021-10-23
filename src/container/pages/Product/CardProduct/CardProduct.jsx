import React, {Component} from "react";
import Counter from "./Counter";

class CardProduct extends Component {
    render(){
    return(     
        <div className="card">
          <div>
           <img className="img-thumb-proud"src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/099fcc6e-92ec-4fdc-b3cb-cd58159f2885"/>
          </div>
          <p className="product-title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy(1 Carton - 10 Pack)</p>
          <p className="product-price">Rp 410,000</p>
          <Counter />
        </div>
    )
  }
}

export default CardProduct;