   
const adminRegisterSchema = {

    firstname: {
        notEmpty: true,
        errorMessage: "Firstname is required"
    },
    lastname: {
        notEmpty: true,
        errorMessage: "Lastname is required"
    },
    phone: {
        notEmpty: true,
        errorMessage: "Enter valid phone number"
    },
    gender: {
        notEmpty: true,
        errorMessage: "Enter Gender 1=Male, 2=Female ,3 =Others"
    },
    password: {
        isStrongPassword: {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1
        },
        errorMessage: "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number",
    },

}

const adminLoginSchema = {

    email: {
        notEmpty: true,
        errorMessage: "Firstname is required"
    },
    password: {
        notEmpty: true,
        errorMessage: "Enter valid password",
    },

}
module.exports = {
    adminRegisterSchema,
    adminLoginSchema
};