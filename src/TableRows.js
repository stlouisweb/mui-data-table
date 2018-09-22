import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'

const TableHeadings = props => {
  const { rows, defaultValue, hoverRows } = props
  return (
    <TableBody>
      {rows.map((row, i) => {
        return (
          <TableRow hover={hoverRows} key={i}>
            {Object.values(row).map(cell =>
              <TableCell>{cell || defaultValue}</TableCell>
            )}
          </TableRow>
        )
      })}
    </TableBody>
  )
}

TableHeadings.propTypes = {
  rows: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired,
  hoverRows: PropTypes.bool
}

TableHeadings.displayName = 'TableHeadings'

export default TableHeadings
