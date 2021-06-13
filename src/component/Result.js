import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as action from '../action/index';

export class Result extends Component {
    onSetStyle = () =>{
        return{
            color : this.props.activeColor,
            
            fontSize : this.props.settingSize
        }
    }
    onSetStyleElemntP = () =>{
        return{
            color : this.props.activeColor,
        }
    }
    render() {
       var {activeColor,settingSize} = this.props;

        return (
            <div className="row col-12">
                <p style = {this.onSetStyleElemntP()}>Color : {activeColor} - Fontsize :{settingSize} </p>
                <div className="form-control">
                    <p style = {this.onSetStyle()}>Xin chào, Ngày mới tốt lành.</p>
                </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        activeColor : state.activeColor,
        settingSize : state.settingSize,
    }
};

const mapDispatchToProps = (dispatch,props) =>{
    return{
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Result)

