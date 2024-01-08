import data from '../api.json';

export const getTeachers = () => {
  return data.teachers;
};

export const getClasses = () => {
  return data.classes;
};