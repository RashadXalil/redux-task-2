import {
  fetchDriversError,
  fetchDriversPending,
  fetchDriversSuccess,
} from '../redux/actions/driver.actions'

function fetchDrivers() {
  return function (dispatch) {
    dispatch(fetchDriversPending())
    fetch('http://ergast.com/api/f1/drivers.json')
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchDriversSuccess(data.MRData.DriverTable.Drivers))
        return data
      })
      .catch((error) => {
        dispatch(fetchDriversError(error))
      })
  }
}

export default fetchDrivers
