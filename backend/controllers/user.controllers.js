import userModels from "../models/user.models.js";
import * as userServices from "../services/user.services.js";
import { validationResult } from "express-validator";

export const createUserController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const user = await userServices.createUser(req.body);

        const token = await user.generateAuthToken();

        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json(error.message);
    }
};

export const loginUserController = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        const { email, password } = req.body;
        const user = await userModels.findOne({ email }).select('+password');

        if(!user){
            return res.status(401).json({ errors: "Invalid email or password" });
        }

        const isMatch = await user.isValidPassword(password);

        if(!isMatch){
            return res.status(401).json({ errors: "Invalid email or password" });
        }

        const token = user.generateAuthToken();

        res.status(200).json({ user, token });
    }
    catch(error){
        res.status(500).json(error.message);
    }
};

export const profileController = async (req, res) => {}