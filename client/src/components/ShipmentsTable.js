import React, { Component } from 'react'
import {Table, Typography, Button} from 'antd'
import {Link} from 'react-router-dom'
export default class ShipmentsTable extends Component {

    render() {
        const {Title} = Typography
        let shipments = this.props.shipments
        if (shipments.length){

        shipments = shipments.map(row => ({
            id: row.id,
           name: row.name,
           mode: row.mode,
           type: row.type,
           origin : row.origin,
           destination: row.destination,
           status : row.status
          }))
        }
          const columns = [
            {
              title: 'Id',
              dataIndex: 'id',
              key: 'id',
              sorter: (a, b) => a.id.localeCompare(b.id),
            },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              sorter: (a, b) => a.name.localeCompare(b.name),
            },
            {
              title: 'Mode',
              dataIndex: 'mode',
              key: 'mode',
            },
            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
              },
              {
                title: 'Origin',
                dataIndex: 'origin',
                key: 'origin',
              },  
              {
                title: 'Destination',
                dataIndex: 'destination',
                key: 'destination',
              },
              {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
              },
              {
                title: "",
                dataIndex: '',
                key: 'x',
                render: (_ , object) => <Link to = {`/shipment/${object.id}`}><Button>View details</Button></Link>,
              },
          ];
        return (
            <div>
                <Table columns = {columns} dataSource = {shipments} pagination={{ pageSize: 20}}
                bordered
                title={() => <Title level = {4} >Shipments Details</Title>}
                />
            </div>
        )
    }
}
