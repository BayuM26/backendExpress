const response = (statusCode, data, message, res) => {
    res.json(statusCode, [
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