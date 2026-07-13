 import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

cloudinary.config({

  cloud_name: process.env.CLOUDINARY_NAME,

  api_key: process.env.CLOUDINARY_API_KEY,

  api_secret: process.env.CLOUDINARY_API_SECRET

});

const uploadOnCloudinary = async (localFilePath) => {

  try {

    if (!localFilePath) return "";

    const result = await cloudinary.uploader.upload(
      localFilePath,
      {
        resource_type: "image"
      }
    );

    if (fs.existsSync(localFilePath)) {
   fs.unlinkSync(localFilePath);
}

    return result.secure_url;

  }

  catch (error) {

    console.log(error);

    return "";

  }

};

export default uploadOnCloudinary;