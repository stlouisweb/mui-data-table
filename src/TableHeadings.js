import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const TableHeadings = props => {
  const { columns } = props
  return (
    <TableHead>
      <TableRow>
        {columns.map(column =>
          <TableCell component='th'>
            {column}
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  )
}

TableHeadings.propTypes = {
  columns: PropTypes.array.isRequired
}

TableHeadings.displayName = 'TableHeadings'

export default TableHeadings
