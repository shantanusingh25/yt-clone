import multer from "multer"; // imported multer

const storage = multer.diskStorage({
    destination: function( req , file ,cb){
        cb(null , "./public/temp");
    } , 

    filename: function(req, file , cb){
        cb(null , file.originalname);
    }
}) // configuration of multer

export const upload = multer({
    storage
});   