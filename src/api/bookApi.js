import axios from 'axios';

// axios
const api = axios.create({
  baseURL: 'https://doram.bsm-aripay.kr',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const saveBook = async (bookData) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('인증 토큰이 없습니다. 다시 로그인해주세요.');
  }
  
  // JSON 형식으로 데이터 구성
  const requestData = {
    bookTitle: bookData.bookTitle,
    bookTagList: bookData.bookTagList, 
    bookContent: bookData.bookContent,
    bookType: bookData.bookType,
    bookImage: bookData.bookImage
  };
  
  try {
    const response = await api.post('/api/book/save', requestData, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error details:', error.response);
    throw error;
  }
};

export const getBooks = async () => {
  const token = localStorage.getItem('token');
  
  try {
    const response = await api.get('/api/book', {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}; 