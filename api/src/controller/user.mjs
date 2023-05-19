import ResponseController from "./response.mjs";
import { GET_STATUS_CODE, ERROR_STATUS_CODE, POST_STATUS_CODE } from "../utils/constants/http-requests.mjs";
import { validationResult } from "express-validator";
import UserModel from "../models/user.model.mjs";

export default class UserController {
    constructor() {
        this.response = new ResponseController()
        this.userModel = new UserModel()
    }
    
    async login(req, res) {
        try {
            const payloadError = validationResult(req)
            if(payloadError.errors && payloadError.errors.length) {
                return this.response.errorResponse(payloadError.errors, ERROR_STATUS_CODE, res)
            }
            const userDetails = await this.userModel.getUser(req.body)
            if(!userDetails.length) {
                return this.response.errorResponse({message: 'Invalid Credentials!'}, ERROR_STATUS_CODE, res)
            }
            return this.response.getResponse('Login Success', GET_STATUS_CODE, res)
        } catch(e) {
            return this.response.errorResponse(e, ERROR_STATUS_CODE, res)
        }
    }

    async register(req, res) {
        try {
            const payloadError = validationResult(req)
            if(payloadError.errors && payloadError.errors.length) {
                return this.response.errorResponse(payloadError.errors, ERROR_STATUS_CODE, res)
            }
            await this.userModel.createUser(req.body)
            return this.response.postResponse({}, POST_STATUS_CODE, res)
        } catch(e) {
            return this.response.errorResponse(e, ERROR_STATUS_CODE, res)
        }
    }
}