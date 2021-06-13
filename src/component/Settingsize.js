import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../action/index'

export class Settingsize extends Component {

  constructor(props){
    super(props);
    this.state = {
      fontsize : 14,
    };
  }

  onPlus = (param) =>{
    this.props.onPlusFontsize(param);
  }

  onReset = ()=>{
    this.props.onResetAll(true);
  }

  render() {
    
    return (
      <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="card mb-3">
              <div className="card-header">
                  Setting Size : {this.props.settingSize}
              </div>
              <div className="card-body">
                <button className="btn btn-primary btn_setting" onClick = {() =>this.onPlus(+2)}><i className="fas fa-plus"></i></button> 
                <button className="btn btn-primary" onClick = {() =>this.onPlus(-2)}><i className="fas fa-minus"></i></button>
              </div>
            </div>
            <button type="button" className="btn btn-danger" onClick={()=> this.onReset()}>Reset</button>
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    settingSize : state.settingSize,
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return{
    onPlusFontsize : (fontsize) =>{
      dispatch(action.setSize(fontsize))
    },
    onResetAll: (allSetting) =>{
      dispatch(action.resetAll(allSetting))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Settingsize)
