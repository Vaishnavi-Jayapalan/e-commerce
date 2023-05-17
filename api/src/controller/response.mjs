export default class ResponseController {
    getResponse(data, statusCode, res) {
        return res.status(statusCode).json({ message: "Success", data: data ? data : {} })
    }

    postResponse(data, statusCode, res) {
        return res.status(statusCode).json({ message: "Created Successfully!", data: data})
    }

    errorResponse(error, statusCode, res) {
        return res.status(statusCode).json({ message: "Error", errors: error })
    }

    notFoundResponse(error, statusCode, res) {
        return res.status(statusCode).json({ message: "Resource Not Found!", errors: error})
    }
}