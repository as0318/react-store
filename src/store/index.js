import {createStore,combineReducers} from 'redux';

import dataList from './reducers/data'

const reducer = combineReducers({
    dataList
})

const store = createStore(reducer)
export default store