import * as constans from './constans';
export const loseFocusAction = () => {
    return {
        type:constans.LOSE_FOCUS
    }
}
export const getFocusAction = () => {
    return {
        type:constans.GET_FOCUS
    }
}