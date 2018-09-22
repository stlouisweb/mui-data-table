import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHeadings from './TableHeadings'
import TableRows from './TableRows'

const styles = {
  root: {
    overflowY: 'auto',
    overflowX: 'auto'
  }
}
class DataTable extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.array,
    data: PropTypes.array.isRequired,
    defaultValue: PropTypes.string,
    hoverRows: PropTypes.bool
  }

  render() {
    const {
      classes,
      columns,
      data,
      defaultValue,
      hoverRows
    } = this.props

    return (
      <Paper classes={{root: classes.root}}>
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
export default withStyles(styles)(DataTable)
