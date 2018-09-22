import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'

const TableRows = props => {
  const { rows, defaultValue, hoverRows } = props
  return (
    <TableBody>
      {rows.map((row, i) => {
        return (
          <TableRow hover={hoverRows} key={i}>
            {Object.values(row).map((cell, i) =>
              <TableCell key={i}>{cell || defaultValue}</TableCell>
            )}
          </TableRow>
        )
      })}
    </TableBody>
  )
}

TableRows.propTypes = {
  rows: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired,
  hoverRows: PropTypes.bool
}

TableRows.displayName = 'TableRows'

export default TableRows
