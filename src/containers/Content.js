import React, { Component } from 'react'
import { connect } from 'react-redux'
import Allocator from './Allocator'
import Predictor from './Predictor'
import Analysis from './Analysis';

export class Content extends Component {
    render() {
        const {activeMenuItem} = this.props
        console.log("active",activeMenuItem)
        switch(activeMenuItem){
            case "predictor":
                return (<Predictor/>)
            case "allocator":
                return (<Allocator/>)
            case "analysis":
                return <Analysis/>
            default:
                return (<div>Not Found</div>)
        }
    }
}

const mapStateToProps = (state) => ({
    ...state
})


const mapDispatchToProps = dispatch=>({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
