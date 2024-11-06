const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

const router = express.Router();

// register
router.post(
    '/register',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required with minimum length 4').isLength({ min: 4 }),
    ],
    authController.register
);

// login
router.post(
    '/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists(),
    ],
    authController.login
);

// reset password
router.post('/reset-password', authController.resetPassword);

module.exports = router;
