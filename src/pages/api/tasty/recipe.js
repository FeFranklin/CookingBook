import axios from 'axios';

export default function handler(req, res) {
  let options = {
    method: 'GET',
    url: `${process.env.TASTY_API_URL}/recipes/list`,
    params: {from: '0', size: '20', tags: 'under_30_minutes', q: 'chicken'},
    headers: {
      'x-rapidapi-host': process.env.TASTY_API_HOST,
      'x-rapidapi-key': process.env.TASTY_API_KEY
    }
  };

  axios.request(options).then(function (response) {
    res.status(200).json(response.data);
  }).catch(function (error) {
    res.status(500).json(error);
  });

}