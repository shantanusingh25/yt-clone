class ApiResponde{
    constructor(statusCode , data , message="Success"){
        this.statusCode = statusCode,
        this.data = data,
        this.message = message,
        this.success = thi.statusCode < 400
    }
}

export {ApiResponde};