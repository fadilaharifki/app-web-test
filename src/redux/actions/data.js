import { ADD_EDUCATION, ADD_EXPERIENCE, EDUCATION, EXPERIENCE, REMOVE_EDUCATION, REMOVE_EXPERIENCE, USER } from "../actionType";

export function setUser(payload) {
    return {
        type: USER,
        payload: payload
    }
}

export function setEducation(payload, index) {
    return {
        type: EDUCATION,
        payload: {
            payload, index
        }
    }
}

export function addEducation(payload) {
    return {
        type: ADD_EDUCATION,
        payload
    }
}

export function removeEducation(index) {
    return {
        type: REMOVE_EDUCATION,
        payload: index
    }
}

export function setExperience(payload, index) {
    return {
        type: EXPERIENCE,
        payload: {
            payload, index
        }
    }
}

export function addExperience(payload) {
    return {
        type: ADD_EXPERIENCE,
        payload
    }
}

export function removeExperience(index) {
    return {
        type: REMOVE_EXPERIENCE,
        payload: index
    }
}