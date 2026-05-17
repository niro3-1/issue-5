// Updated regex validation for email field
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
    if (!emailRegex.test(email)) {
        throw new Error('Invalid email format');
    }
    return true;
}