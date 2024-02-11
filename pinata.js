const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlYTAxYWM3YS00YzZhLTQ5YTUtYjhmNy0zMGIyYjNmYzcwZmUiLCJlbWFpbCI6ImFsZXhhbmRyZS5iZXJuYXJkQGVkdS5kZXZpbmNpLmZyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImQyNjQyZTdjZWRkNzQ2Yjk1OTZiIiwic2NvcGVkS2V5U2VjcmV0IjoiYTg0MWM1YTU1OTFmZTJmODU0NjQ1NjI3ZTFjMTIwMzVhMGI4ZTMxMzgyNzQwM2NmNDAzNWI1MTMxMTZlNjdjMiIsImlhdCI6MTcwNzY2MDQzM30.xEXM2AXwnm9YOhZNwlidqyacJpBnHrCSvolCUpNHPpM'

const pinFileToIPFS = async () => {
    const formData = new FormData();
    const src = "Chaton.jpeg";
    
    const file = fs.createReadStream(src)
    formData.append('file', file)
    
    const pinataMetadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', pinataMetadata);
    
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'Authorization': `Bearer ${JWT}`
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}
pinFileToIPFS()
