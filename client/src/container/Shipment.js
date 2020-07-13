import React, { Component, Fragment } from 'react'
import {getShipment} from '../api/shipments'
import {message, Card, Table, Typography, List} from 'antd'
export default class Shipment extends Component {
    state = {
        shipment : null
    }
    componentDidMount(){
        message.info("loading...")
        const { id } = this.props.match.params
        getShipment(id)
        .then(res => {
            this.setState({
                shipment : res.data
            })
        })
    }
    render() {
       
     const shipment = this.state.shipment
        return (
            <div>
            {shipment ? (
            <div style = {{ padding: "30px",
                background: "#ececec", width : "100%"}}>
            <Card title="Shipment Details" bordered={false} style={{ width: "100%" }}>
              <p><span><b>id</b></span> : {shipment.id}</p>
              <p><span><b>UserId</b></span> : {shipment.userId}</p>
              <p><span><b>Name</b></span> : {shipment.name}</p>
              <p><span><b>Mode</b></span> : {shipment.mode}</p>
              <p><span><b>Type</b></span> : {shipment.type}</p>
              <p><span><b>Origin</b></span> : {shipment.origin}</p>
              <p><span><b>Destination</b></span> : {shipment.destination}</p>
              <p><span><b>Total</b></span> : {shipment.total}</p>
              <p><span><b>Status</b></span> : {shipment.status}</p>
              <CargoTable  style = {{marginTop : '1rem'}} details = {shipment.cargo}/>
                <Services services = {shipment.services} />
            </Card>

          </div>
            ): (<h4>Not Found</h4>)
            }
            </div>
        )
    }
}


function CargoTable({details}){
    const {Title} = Typography;
    const columns = [
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Volume',
          dataIndex: 'volume',
          key: 'volume',
        }
      ];

     
      details = details.map(row => ({
      
       type: row.type,
       description : row.description,
       volume: row.volume,
      }))
    
    return (
        <div>
        <Table columns = {columns} dataSource = {details}  title={() => <Title level = {4} >Cargo Details</Title>} size = "small"  style = {{width : 300}}/>
        </div>
    )
}

function Services ({services}) {
    services = services.map(service => service.type)
    return (
        <Fragment>
        <List style = {{width : 300}}
        header={<Typography.Title level = {4} >Services</Typography.Title>}
        bordered
        dataSource={services}
        renderItem={item => (
          <List.Item>
          {item}
          </List.Item>
        )}
       />
       </Fragment>
    )
   
}