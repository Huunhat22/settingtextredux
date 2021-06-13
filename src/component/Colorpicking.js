import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../action/index'

export class Colorpicking extends Component {
    //tạo State
    constructor(props){
        super(props);
        this.state ={
            Colors : ['red','green','blue','#fd23b0'],
        };
    }

    showColor = (color) =>{
        return {
            background : color
        };
    }

    render() {

        var {activeColor} = this.props;
        var elementColor = this.state.Colors.map((color,index) =>{
            return <span
                        key={index}
                        style = {this.showColor(color)}
                        className = {activeColor ===  color ? 'active' : '' }
                        onClick = {() => this.props.onColorClick(color)}
                    >
                    </span>
        });

        return (
            <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="card">
                    <div className="card-header">
                        Color Picking
                    </div>
                    <div className="card-body">
                        {elementColor}
                    </div>
                </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        activeColor : state.activeColor,
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return{
        onColorClick : (color) =>{
            dispatch(action.activeColor(color));
        },
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Colorpicking)
