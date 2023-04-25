import { EMAIL, EMAIL_PATTERN, NAME, NAME_PATTERN, PASSWORD, PASSWORD_PATTERN } from "../constants";

export const validateForm = (errors, value, type) => {
    switch(type) {
        case EMAIL:
            return {
                ...errors, 
                [EMAIL]: !EMAIL_PATTERN.test(value)
            }
        case PASSWORD:
            return {
                ...errors, 
                [PASSWORD]: !PASSWORD_PATTERN.test(value)
            }
        case NAME:
            return {
                ...errors,
                [NAME]: !NAME_PATTERN.test(value)
            }
        default:
            return errors
    }
}