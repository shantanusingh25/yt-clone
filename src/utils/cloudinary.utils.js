import { v2 as cloudinary } from "cloudinary"; // cloudinary imported
import fs from "fs"; // fs imported

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINRY_API_SECRET,
});

const uploadOnCloudinary = async function(localFilePath){
    try {
        if(!localFilePath) return null;

        //uploading on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath , {
            resource_type: "auto",
        });
        //file has been uploaded successfully.
        console.log("The file has been uploaded on cloudinary server.");
        console.log(`The data of response ${response}`);
        return response;

    } catch (error) {
        console.log(`Error in file [[cloudinary.util.js]]`);

        fs.unlinkSync(localFilePath); //removes the malicious files from the server.
        return null; 
    }
}

export {uploadOnCloudinary};