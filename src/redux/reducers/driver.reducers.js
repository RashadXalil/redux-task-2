import {
  FETCH_DRIVERS_PENDING,
  FETCH_DRIVERS_SUCCESS,
  FETCH_DRIVERS_ERROR,
} from '../actions/drivers.actions'

const initialState = {
  pending: false,
  universities: [],
  error: null,
}

export function driverReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DRIVERS_PENDING:
      return {
        ...state,
        pending: true,
      }
    case FETCH_DRIVERS_SUCCESS:
      return {
        ...state,
        pending: false,
        drivers: action.drivers,
      }
    case FETCH_DRIVERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    default:
      return state
  }
}

export const getDrivers = (state) => state.driverReducer.drivers
export const getDriversPending = (state) => state.driverReducer.pending
export const getDriversError = (state) => state.driverReducer.error
