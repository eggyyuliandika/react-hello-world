import React, { Component } from "react";
import {connect} from 'react-redux';
import ActionType from "../../../../redux/reducer/globalActionType";
import {GlobalConsumer} from '../../../../content/context'

class Counter extends Component {
  // state = {
  //   order: 4
  // }
    // Statefull Component : state yang memiliki kemampuan ketika berubah ia akan merender ulang component di dalamnya dan akan diganti dengan state yang berubah tersebut. 
  
  //   handleCounterChange = (newValue) => {
  //   this.props.onCounterChange(newValue);
  // }  

  // handlePlus = () => {
  //   this.setState({
  //     order: this.state.order + 1
  //   },() => {
  //   this.handleCounterChange(this.state.order);
  //   })  
  // }

  // handleMinus = () => {
  //   if(this.state.order > 0){
  //     this.setState({
  //       order: this.state.order - 1
  //     },() => {
  //       this.handleCounterChange(this.state.order);
  //     })
  //   } 
  // }

   render(){
     console.log(this);
     return(
        <div className="counter">
              <button className="minus" onClick={()=>this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
              <input type="text" value={this.props.state.totalOrder} />
              <button className="minus" onClick={()=>this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
            </div>
       
     )
   }
 }

//  const mapStateToProps = (state) => {
//    return {
//      order: state.totalOrder
//    }
//  }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
//     handleMinus: () => dispatch({type: ActionType.MINUS_ORDER})
//   }
// }

//  export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);