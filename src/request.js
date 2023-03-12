const axios = require('axios');

export default async function postRequest(jobTitle, companyTitle, currentDate) {
    const baseURL = "https://3dda-2001-569-70c7-4300-8095-1aac-6db8-57ad.ngrok.io"
    const URL = baseURL + "/api/v1/job";
    const options = {
      data: {
        //userID: userID,
        jobTitle: jobTitle,
        companyTitle: companyTitle,
        currentDate: currentDate,
      },
    };

    try {
      await axios.post(URL, options).then(() => {
        console.log('request complete');
      });
    } catch (error) {
      console.log(error);
    }
}
