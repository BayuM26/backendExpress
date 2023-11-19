const response = (statusCode, data, message, res) => {
    res.status(statusCode).json([
        {
            statusCode: statusCode,
            payload:{
                data
            },
            message: message,
        },
    ])
}

module.exports = response