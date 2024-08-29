import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=4d545ac5', {
      params: {
        api_key: '4bd04a15-1e03-43e6-b252-b91ffdf06234',
        other_param: 'value'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
