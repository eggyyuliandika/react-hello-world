import React, {Component, Fragment} from "react";
import CardProduct from "./CardProduct/CardProduct";
import './Product.css';
import {connect} from 'react-redux';


class Product extends Component {
  // state = {
  //   order: 4
  // }
  //   // Statefull Component : state yang memiliki kemampuan ketika berubah ia akan merender ulang component di dalamnya dan akan diganti dengan state yang berubah tersebut. 
    
  // handleCounterChange = (newValue) => {
  //     this.setState({
  //       order:  newValue
  //     })
  //   }  

   render(){
    return(
      <Fragment>
                <p>Halaman Product</p>
                <hr/>
                <div className="header">
                  <div className="logo">
                    <img src="./daun.png" />
                  </div>
                  <div className="troley">
                    <img src="./troli.png" />
                    {/* <div className="count">{value.state.totalOrder}</div> */}
                  </div>
                </div>
                <CardProduct />
             </Fragment> 
      
     
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     order: state.totalOrder
//   }
// }

// export default connect(mapStateToProps)(Product);
export default Product;