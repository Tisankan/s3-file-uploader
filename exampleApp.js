const S3FileUploader = require('s3-file-uploader');
const config = require('./config'); // Load your AWS S3 credentials from config.js

const uploader = new S3FileUploader(config);

const filePath = 'path/to/your/file.txt';
const destinationPath = 'destination/path/in/s3/file.txt';

uploader.uploadFile(filePath, destinationPath)
    .then(() => console.log('File uploaded successfully.'))
    .catch((error) => console.error('Error uploading file:', error));
