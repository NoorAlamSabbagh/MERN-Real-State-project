import bcrypt from "bcrypt";
export const register = async (req, res) => {
    const {username, email, password} = req.body;
    //HASH The Password
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);
}

export const login = (req, res) => {
    console.log("register login");
}
export const logout = (req, res) => {
    console.log("register logout");
}
