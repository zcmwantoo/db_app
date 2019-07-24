import * as actionTypes from './actionType'

export const nameChange = (name) => {
    return {
        type:actionTypes.NAME_CHANGE,
        name
    }
}
export const passChange = (pass) => {
    return {
        type:actionTypes.PASS_CHANGE,
        pass
    }
}