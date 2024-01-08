import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Yerel MongoDB ve Express sunucusunun çalıştığı adres

const api = axios.create({
  baseURL: API_URL,
});

const TeacherService = {
  getAllTeachers: () => api.get('/teachers'),
  addTeacher: (name) => api.post('/teachers', { name }),
};

export default TeacherService;
