import {
    S3
} from 'aws-sdk';
const s3 = new S3();
import Router from 'koa-router'
import {
    uploadToS3
} from '../middlewares/upload';

const router = new Router();

router.post('/v1/upload', uploadToS3.single("image"), async (ctx, next) => {
    ctx.body = ctx.request.file
});
// router.post('/v1/generate-url', async (ctx, next) => {
//     const {
//         fileName,
//         fileType
//     } = ctx.query;
//     const s3Params = {
//         Bucket: process.env.AWS_S3_BUCKET,
//         Key: fileName,
//         ContentType: fileType,
//         Expires: 600,
//     };

//     s3.getSignedUrl('putObject', s3Params, (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.error(data);
//             ctx.body = {
//                 signedRequest: data,
//                 url: `https://${process.env.AWS_S3_BUCKET}.s3.amazonaws.com/${fileName}`
//             }
//         }
//     });
// });


export default router;