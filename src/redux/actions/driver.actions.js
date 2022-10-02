export const FETCH_DRIVERS_PENDING = 'FETCH_DRIVERS_PENDING'
export const FETCH_DRIVERS_SUCCESS = 'FETCH_DRIVERS_SUCCESS'
export const FETCH_DRIVERS_ERROR = 'FETCH_DRIVERS_ERROR'

export function fetchDriversPending() {
  return {
    type: FETCH_DRIVERS_PENDING,
  }
}

export function fetchDriversSuccess(drivers) {
  return {
    type: FETCH_DRIVERS_SUCCESS,
    drivers,
  }
}

export function fetchDriversError(error) {
  return {
    type: FETCH_DRIVERS_ERROR,
    error,
  }
}
