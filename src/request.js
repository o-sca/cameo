const axios = require('axios');

export default function postRequest(jobTitle, companyTitle, currentDate) {
  const options = {
    method: 'POST',
    url: 'https://3dda-2001-569-70c7-4300-8095-1aac-6db8-57ad.ngrok.io/api/v1/job',
    data: {
      //userID: userID,
      jobTitle: jobTitle,
      companyTitle: companyTitle,
      currentDate: currentDate,
    },
  };

  axios(options).then(() => {
    console.log('request complete');
  });
}
