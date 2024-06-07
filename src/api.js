import axios from "axios";

const fetchBooks = async (query, maxResults, filter)=> {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
        params: {
        q: query || "+terms1",
        maxResults: maxResults || 10,
        filter: filter || "paid-ebooks",
        API_KEY: process.env.REACT_APP_API_KEY
        },
      });    
      return response.data;
    } catch (error) {
      console.error("Error fetching books:", error);
      return []; // or handle the error as needed
    }
  };

export default fetchBooks;