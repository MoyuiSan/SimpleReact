import {counter} from './reducer'
import { createStore } from 'redux'
export const store = createStore(counter)