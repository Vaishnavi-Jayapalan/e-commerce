export const registerSchema = {
    name: {
        matches: {
            options: /^[a-zA-Z]{3,}$/,
            errorMessage: 'Invalid Name. Should contain more than 3 characters'
        }
    },
    email: {
        isEmail: true,
        errorMessage: 'Invalid Email Address'
    },
    password: {
        matches: {
            options: /^[A-Za-z\d@$!%*?&]{8,}$/,
            errorMessage: 'Password should contain more than 8 characters'
        }
    }
}

export const loginSchema = {
    email: {
        isEmail: true,
        errorMessage: 'Invalid Email Address'
    },
    password: {
        matches: {
            options: /^[A-Za-z\d@$!%*?&]{8,}$/,
            errorMessage: 'Password should contain more than 8 characters'
        }
    }
}