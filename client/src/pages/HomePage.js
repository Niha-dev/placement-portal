import React, { useState, useEffect } from 'react';
import { getCompanies, getStudents } from '../services/api';

const HomePage = () => {
  const [companies, setCompanies] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch companies and students
    const fetchData = async () => {
      try {
        const companiesData = await getCompanies();
        setCompanies(companiesData);
        const studentsData = await getStudents();
        setStudents(studentsData);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Placement Portal</h1>
      <h2>Companies</h2>
      <ul>
        {companies.map((company) => (
          <li key={company._id}>{company.name}</li>
        ))}
      </ul>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
