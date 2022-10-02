import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchDrivers from '../../api/getDerivers'
import {
  getDrivers,
  getDriversPending,
  getDriversError,
} from '../../redux/reducers/driver.reducers'
import { Spin } from 'antd'
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
import toast, { Toaster } from 'react-hot-toast'

function Drivers() {
  const drivers = useSelector(getDrivers)
  const pending = useSelector(getDriversPending)
  const error = useSelector(getDriversError)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchDrivers()(dispatch)
  }, [dispatch])

  const favorites = useSelector((state) => state.favoriteReducer)
  const add = (item) => {
    if (!favorites.find((x) => x.driverId === item.driverId)) {
      dispatch({ type: 'ADD_TO_FAVORITE', payload: item })
      notify()
    } else {
      notifyError()
    }
  }

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div>
          <h1 style={{ color: 'red', fontWeight: 'bold' }}>
            Error has occurred...
          </h1>
        </div>
      </div>
    )
  }

  const notify = () => {
    toast.success('Driver added to favorites successfully!', {
      duration: 2000,
      position: 'bottom-right',
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    })
  }
  const notifyError = () => {
    toast.error('This driver is already added to favorites!', {
      duration: 2000,
      position: 'bottom-right',
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    })
  }
  return (
    <div className="container">
      {pending ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spin size="large" />
        </div>
      ) : (
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
                  Add to Favorite
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {drivers?.map((driver) => (
                <TableRow
                  key={driver.driverId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  style={{
                    backgroundColor: driver.permanentNumber
                      ? 'white'
                      : '#fcbe00',
                  }}
                >
                  <TableCell component="th" scope="row">
                    {driver.givenName} {driver.familyName}
                  </TableCell>
                  <TableCell align="right">{driver.permanentNumber}</TableCell>
                  <TableCell align="right">{driver.nationality}</TableCell>
                  <TableCell align="right">{driver.dateOfBirth}</TableCell>
                  <TableCell align="right">
                    <a
                      style={{
                        color: 'black',
                      }}
                      target="_blank"
                      rel="noreferrer"
                      href={`${driver.url}`}
                    >
                      Biography
                    </a>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      style={{
                        backgroundColor:
                          favorites.find(
                            (x) => x.driverId === driver.driverId,
                          ) === undefined
                            ? ''
                            : 'green',
                      }}
                      onClick={() => add(driver)}
                      variant="contained"
                    >
                      {favorites.find((x) => x.driverId === driver.driverId) ===
                      undefined
                        ? 'Add'
                        : 'Added'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Toaster />
        </TableContainer>
      )}
    </div>
  )
}

export default Drivers
