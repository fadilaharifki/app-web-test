import axios from "axios";
import { ADD_EDUCATION, ADD_EXPERIENCE, EDUCATION, EXPERIENCE, REMOVE_EDUCATION, REMOVE_EXPERIENCE, USER } from "../actionType";
import { BASE_URL } from "../../pages/utils/URL";
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

export const postDataUser = (user, education, experience) => {
    return (dispatch) => {
        postUserRequest(user)
            .then(res => {
                const newDataEdu = education.map((e) => {
                    return { ...e, user_id: res.data.data.id }
                })

                const newDataExp = experience.map((e) => {
                    return { ...e, user_id: res.data.data.id }
                })

                postEducationRequest(newDataEdu)
                postExperienceRequest(newDataExp)
            })
            .catch(err => {
                console.log(err);
            })
    };
}

const postUserRequest = async (user) => {
    return await axios.post(BASE_URL + 'items/users', user)
}

const postEducationRequest = async (education) => {
    return await axios.post(BASE_URL + 'items/education', education)
}

const postExperienceRequest = async (experience) => {
    return await axios.post(BASE_URL + 'items/experience', experience)
}