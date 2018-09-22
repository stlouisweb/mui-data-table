import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHeadings from './TableHeadings'
import TableRows from './TableRows'
export default class DataTable extends Component {
  static propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array.isRequired,
    defaultValue: PropTypes.string,
    hoverRows: PropTypes.bool
  }

  render() {
    const {
      columns,
      data,
      defaultValue,
      hoverRows
    } = this.props

    return (
      <Paper>
        <Table>
          { columns &&
            <TableHeadings columns={columns} />
          }
          <TableRows rows={data} defaultValue={defaultValue || '-'} hoverRows={hoverRows} />
        </Table>
      </Paper>
    )
  }
}
