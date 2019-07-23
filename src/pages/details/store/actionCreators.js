import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const detailsDefaulst = (data) =>({
    type:actionTypes.GET_DETAILS,
    title:data.title,
    content:data.content
})
export const getDetailsAction = (id) => {
    return (dispatch) => {
        axios.get('/api/details.json?id='+id).then(
            (res) => {
                dispatch(detailsDefaulst(res.data.data));
            }
        ).catch(err => console.log(err))
    }
}