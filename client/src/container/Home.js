import React, { Component } from 'react'
import {getAllShipments} from '../api/shipments'
import {message, Content} from 'antd'
import {handleCatch} from '../helper'
import SHipmentsTable from '../components/ShipmentsTable'
import ShipmentsTable from '../components/ShipmentsTable'

export default class Home extends Component {
    state = {
        shipments : []
    }

    componentDidMount(){
        getAllShipments()
        .then((res) => {
           this.setState({
               shipments : res.data
           }, () => {
            message.info("loaded successfully")
           })
           
        })
        .catch((err) => {
            console.log(err)
            handleCatch(err)
        })
    }
    
    render() {
        return (
            <div style = {{
                background : "#fff",
                padding : "50px 100px"
            }}>
               <ShipmentsTable  shipments = {this.state.shipments}/>
            </div>
        )
    }
}
