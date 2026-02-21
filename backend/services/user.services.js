import userModels from "../models/user.models.js";


export const createUser = async ({ email, password }) => {
    if (!email || !password) {
        throw new Error("Email and Password are required");
    }

    const hashPassword = await userModels.hashPassword(password);

    const user = await userModels.create({
        email,
        password: hashPassword
    });

    return user;
};        