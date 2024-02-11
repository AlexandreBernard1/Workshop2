const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlYTAxYWM3YS00YzZhLTQ5YTUtYjhmNy0zMGIyYjNmYzcwZmUiLCJlbWFpbCI6ImFsZXhhbmRyZS5iZXJuYXJkQGVkdS5kZXZpbmNpLmZyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjQ0NjdiNWM4MDMxZTBlYmVlMWY2Iiwic2NvcGVkS2V5U2VjcmV0IjoiY2U0YWRmOTUyZjBkY2RiM2JkMTVmMzM3ZDk1YzEzZjA1ZThjMmViZjE4NmE4NjYyNWQ2NWY1Yzc4MjE3MTBlMyIsImlhdCI6MTcwNzY2MjE2N30.pF0e3DPuNTjF3P2vQ1bMp0TM097_Ed6X8R8iy2HEqrs'

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
