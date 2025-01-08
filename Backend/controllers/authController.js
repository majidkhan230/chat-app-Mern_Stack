const register = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(400).send({
            message:"something went wrong with server",
            error:error.message
        })
    }
}
const login = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(400).send({
            message:"something went wrong with server",
            error:error.message
        })
    }
}
const logout = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(400).send({
            message:"something went wrong with server",
            error:error.message
        })
    }
}
const forgotPassword = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(400).send({
            message:"something went wrong with server",
            error:error.message
        })
    }
}
const reset = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(400).send({
            message:"something went wrong with server",
            error:error.message
        })
    }
   
}


const authController = {register,login,logout,reset,forgotPassword,forgotPassword}


export default authController