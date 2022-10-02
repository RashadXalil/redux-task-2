import { combineReducers } from 'redux'
import { driverReducer } from './reducers/driver.reducers'
import { favoriteReducer } from './reducers/favorites.reducer'

export const reducers = combineReducers({
  driverReducer,
  favoriteReducer,
})
