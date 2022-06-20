const responseTemp = (httpStatus, message, data) => {
    return {
        status: httpStatus,
        message,
        data
    }
}

export default responseTemp;