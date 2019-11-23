import {CITIES} from '../shared/cities';
import {ISLANDS} from '../shared/islands';
import {FORESTS} from '../shared/forests';
import {DESERTS} from '../shared/deserts';

export const initialState = {
    cities: CITIES,
    islands: ISLANDS,
    forests: FORESTS,
    deserts: DESERTS
}

export const Reducer = (state=initialState, action) => {
    return state;
}