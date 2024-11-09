
import axios from 'axios';

export const fetchSearchResults = async (query, page) => {
  const response = await axios.get(`https://hn.algolia.com/api/v1/search`, {
    params: { query, page },
  });
  return response.data;
};
