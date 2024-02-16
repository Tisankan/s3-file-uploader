# s3-file-uploader

A simple Node.js package for uploading files to AWS S3. This package allows users to configure their own AWS S3 credentials and seamlessly upload files to their S3 buckets.

## Installation

```bash
npm install s3-file-uploader
```

## Configuration

Create a config.js file in your project's root directory to store your AWS S3 credentials. Replace the placeholder values with your actual AWS S3 credentials:
```javascript
// config.js
module.exports = {
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_REGION',
  bucketName: 'YOUR_BUCKET_NAME',
};
```
## Usage

Create a JavaScript file (e.g., app.js) in your project and use the s3-file-uploader package to upload a file to your S3 bucket:

```javascript
// app.js
const S3FileUploader = require('s3-file-uploader');
const config = require('./config'); // Load your AWS S3 credentials from config.js

const uploader = new S3FileUploader(config);

const filePath = 'path/to/your/file.txt';
const destinationPath = 'destination/path/in/s3/file.txt';

uploader.uploadFile(filePath, destinationPath)
  .then(() => console.log('File uploaded successfully.'))
  .catch((error) => console.error('Error uploading file:', error));
```
## Author

    Name: Tisankan
    Email: info.tisankan@gmail.com

## License

This project is licensed under the MIT License - see the LICENSE file for details.