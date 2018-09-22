import React, { Component } from 'react'

import DataTable from 'data-table'
import Grid from '@material-ui/core/Grid'
// import DataTable from 'data-table'

export default class App extends Component {
  render () {
    const columns = [
      'Year',
      'Make',
      'Model',
      'Trim',
      'Engine',
      'Transmission',
      'Color',
      'Miles'
    ]
    const data = [
      ['1968', 'Cheverolet','Camaro', 'RS', 'V8', 'Automatic', 'Black', '32,000'],
      ['1965', 'Ford', 'Mustang', '', 'V8', '4SPD', 'White', '55,000'],
      ['2016', 'Dodge', 'Challenger', 'T/A', 'V8', 'Automatic', 'Blue', '35,000'],
      ['1968', 'Cheverolet','Camaro', 'RS', 'V8', 'Automatic', 'Black', '32,000'],
      ['1965', 'Ford', 'Mustang', '', 'V8', '4SPD', 'White', '55,000'],
      ['2016', 'Dodge', 'Challenger', 'T/A', 'V8', 'Automatic', 'Blue', '35,000'],
      ['1968', 'Cheverolet','Camaro', 'RS', 'V8', 'Automatic', 'Black', '32,000'],
      ['1965', 'Ford', 'Mustang', '', 'V8', '4SPD', 'White', '55,000'],
      ['2016', 'Dodge', 'Challenger', 'T/A', 'V8', 'Automatic', 'Blue', '35,000'],
      ['1968', 'Cheverolet','Camaro', 'RS', 'V8', 'Automatic', 'Black', '32,000'],
      ['1965', 'Ford', 'Mustang', '', 'V8', '4SPD', 'White', '55,000'],
      ['2016', 'Dodge', 'Challenger', 'T/A', 'V8', 'Automatic', 'Bue', '35,000']
    ]
    return (
      <div style={{padding: '64px'}}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <h3>Basic DataTable:</h3>
            <DataTable columns={columns} data={data} hoverRows />
          </Grid>
        </Grid>

      </div>
    )
  }
}
