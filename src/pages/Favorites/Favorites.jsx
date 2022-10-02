import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { Col } from 'antd'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

function Favorites() {
  const favorites = useSelector((state) => state.favoriteReducer)

  const dispatch = useDispatch()

  const empty = () => {
    dispatch({ type: 'EMPTY_FAVORITE', payload: '' })
    notify()
  }

  const remove = (item) => {
    console.log(`removed from favorites...${item.driverId}`)
    dispatch({ type: 'REMOVE_FROM_FAVORITE', payload: item })
    notifyone()
  }

  const notify = () => {
    toast.success('Favorites cleaned successfully', {
      duration: 1500,
      position: 'bottom-right',
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    })
  }
  const notifyone = () => {
    toast.success('Favorite removed successfully', {
      duration: 1500,
      position: 'bottom-right',
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    })
  }
  return (
    <>
      <div className="container">
        <h2>
          <b>Favorites Count:</b> {favorites.length}
        </h2>
        <Col>
          <Button
            style={{ marginBottom: '30px' }}
            variant="contained"
            onClick={() => empty()}
          >
            Remove All
          </Button>
        </Col>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>
                  Driver Name
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align="right">
                  Permanent Number
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align="right">
                  Nationality
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align="right">
                  Date of Birth
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align="right">
                  Information
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align="right">
                  Remove from Favorite
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {favorites?.map((favorite) => (
                <TableRow
                  key={favorite.driverId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  style={{
                    backgroundColor: favorite.permanentNumber
                      ? 'white'
                      : '#C41E3A',
                  }}
                >
                  <TableCell component="th" scope="row">
                    {favorite.givenName} {favorite.familyName}
                  </TableCell>
                  <TableCell align="right">
                    {favorite.permanentNumber}
                  </TableCell>
                  <TableCell align="right">{favorite.nationality}</TableCell>
                  <TableCell align="right">{favorite.dateOfBirth}</TableCell>
                  <TableCell align="right">
                    <a
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                      }}
                      target="_blank"
                      rel="noreferrer"
                      href={`${favorite.url}`}
                    >
                      Biography
                    </a>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={() => remove(favorite)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Toaster />
        </TableContainer>
      </div>
    </>
  )
}

export default Favorites
