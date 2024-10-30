import axios from 'axios';

// axios 인스턴스 생성 및 기본 설정
const api = axios.create({
  baseURL: 'https://doram.bsm-aripay.kr', // 백엔드 서버 주소로 수정해주세요
  headers: {
    'Content-Type': 'application/json',
  }
});

export const saveBook = async (bookData) => {
  const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJ3eHN2MTkiLCJyb2xlcyI6IlJPTEVfVVNFUiIsImlhdCI6MTczMDMwNjU0NywiZXhwIjoxNzMwMzEwMTQ3fQ.8Ky_ymHYO4186XlM6jqGeQQ6Pssre88v1K5gQKZIn0w';
  
  try {
    const response = await api.post('/api/book/save', bookData, {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}; 