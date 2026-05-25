// Additional tests for email validation
const assert = require('assert');
const { validateEmail } = require('./emailValidation');

describe('Email Validation Tests', () => {
    it('should return true for valid email', () => {
        assert.strictEqual(validateEmail('test@example.com'), true);
    });

    it('should throw error for invalid email', () => {
        assert.throws(() => validateEmail('invalid-email'), { message: 'Invalid email format' });
    });

    it('should throw error for empty email', () => {
        assert.throws(() => validateEmail(''), { message: 'Invalid email format' });
    });
});