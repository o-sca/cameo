const axios = require('axios');

export default async function postRequest(jobTitle, companyTitle, currentDate) {
  const userID = 1;
  console.log(localStorage.getItem('user_id'));
  const jobURL =
    'https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3505606420';

  const baseURL =
    'https://6af8-2001-569-70c7-4300-8095-1aac-6db8-57ad.ngrok.io';
  const URL = baseURL + '/api/v1/job';

  const options = {
    userId: userID,
    jobTitle: jobTitle,
    jobUrl: jobURL,
    companyTitle: companyTitle,
    currentDate: currentDate,
  };

  console.log(options);

  try {
    await axios.post(URL, options).then(() => {
      console.log('request complete');
    });
  } catch (error) {
    console.log(error);
  }
}
