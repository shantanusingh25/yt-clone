// async handler is a function which accepts a function rather returning it it runs another function. This is a wrap up code.

const asyncHandler = (fn) => async (req , res , next) => {
    try {
        await fn(req , res , next);
    } catch (err) {
        res.status(err.code ||  500).json({
            success: false,
            message: err.msg
        });
    }
};

export {asyncHandler};