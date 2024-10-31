import axios from 'axios';

// axios 인스턴스 생성 및 기본 설정
const api = axios.create({
  baseURL: 'https://doram.bsm-aripay.kr', // 백엔드 서버 주소로 수정해주세요
  headers: {
    'Content-Type': 'application/json',
  }
});

export const saveBook = async (bookData) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('인증 토큰이 없습니다. 다시 로그인해주세요.');
  }
  
  const formData = new FormData();
  formData.append('bookTitle', bookData.bookTitle);
  formData.append('bookTagList', bookData.bookTagList);
  formData.append('bookContent', bookData.bookContent);
  formData.append('bookType', bookData.bookType);
  if (bookData.bookImage) {
    formData.append('bookImage', bookData.bookImage);
  }
  
  try {
    const response = await api.post('/api/book/save', formData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}; 