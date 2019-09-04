module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
    "https://peaceful-fortress-94581.herokuapp.com/api",
    CLIENT_ORIGIN: 'http://localhost:3000/'
};