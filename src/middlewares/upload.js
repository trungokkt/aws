import dotenv from "dotenv/config";
import AWS from 'aws-sdk'
import multerS3 from 'multer-s3'
import multer from '@koa/multer'
import {
    v4 as uuidv4
} from 'uuid';

const REGION = process.env.REGION;
const BUCKET_NAME = process.env.BUCKET_NAME
const IAM_USER_KEY = process.env.AWS_ACCESS_KEY;
const IAM_USER_SECRET = process.env.AWS_SECRET_ACCESS_KEY;

AWS.config.update({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET
});

const s3 = new AWS.S3({
    region: REGION
});

const uploadToS3 = multer({
    storage: multerS3({
        s3: s3,
        bucket: BUCKET_NAME,
        key: function (req, file, cb) {
            const fileName = uuidv4() + file.originalname.toLowerCase().split(' ').join('-');
            cb(null, fileName)
        }
    })
})

export {
    uploadToS3
};