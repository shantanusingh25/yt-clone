class ApiError extends Error{
    constructor(statusCode , message = "Something went wrong" , errors = [] , stack){

        //overriding the feilds

        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.success =  false,
        this.errors = errors;
        this.data = null;

        if(stack) { 
            this.stack = stack; 
        } else {
            Error.captureStackTrace(this , this.constructer);
        }
    }
}

export {ApiError};