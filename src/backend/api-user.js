const app = require('./express-app');
const Utils = require('./utils');

const baseUrl = Utils.getApiBaseUrl('users');

/**
 * Get list of users
 */
app.get(baseUrl, (req, res) => {});


/**
 * Create user
 */
app.post(baseUrl, (req, res) => {});


/**
 * modify user
 */
app.put(baseUrl + ':userId', (req, res) => {});


/**
 * Get user detail
 */
app.get(baseUrl + ':userId', (req, res) => {});


/**
 * delete user
 */
app.delete(baseUrl + ':userId', (req, res) => {});


/**
 * Get list of user's projects
 */
app.options(baseUrl + ':userId', (req, res) => {});
