function isDevelopmentENV() {
    return  process.env.NODE_ENV === 'development'
}

module.exports = {
    isDevelopmentENV,
}