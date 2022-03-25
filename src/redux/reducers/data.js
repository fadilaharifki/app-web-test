import { ADD_EDUCATION, ADD_EXPERIENCE, EDUCATION, EXPERIENCE, REMOVE_EDUCATION, REMOVE_EXPERIENCE, USER } from "../actionType";

const initialState = {
    user: {},
    education: [{}],
    experience: [{}],
}

export default function data(state = initialState, action) {
    const { type, payload } = action
    if (type === USER) {
        return { ...state, user: payload }
    } else if (type === EDUCATION) {
        state.education.splice(payload.index, 1, payload.payload)
        return { ...state, education: state.education }
    } else if (type === ADD_EDUCATION) {
        state.education.push(payload)
        return { ...state, education: state.education }
    } else if (type === REMOVE_EDUCATION) {
        state.education.splice(payload, 1)
        return { ...state, education: state.education }
    } else if (type === EXPERIENCE) {
        state.experience.splice(payload.index, 1, payload.payload)
        return { ...state, experience: state.experience }
    } else if (type === ADD_EXPERIENCE) {
        state.experience.push(payload)
        return { ...state, experience: state.experience }
    } else if (type === REMOVE_EXPERIENCE) {
        state.experience.splice(payload, 1)
        return { ...state, experience: state.experience }
    }
    return state
}