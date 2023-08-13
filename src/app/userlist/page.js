"use client"
import React, { useState, useEffect } from 'react';
import styles from '../page.module.css';
import axios from 'axios';

export default function Page() {
  const [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users?page=${currentPage}&sort=name&length=5`);
      console.log(response);
      setUsers(response.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  return (
    <main className={styles.main}>
      <div>
        <h1>User List</h1>
       {/* <ul>
          {users && users.map((user) => (
            <li key={user.id}>
              {user.name} , {user.email}
            </li>
          ))}
          </ul>*/}
 <ul className={styles['user-list']}>
  {users && users.length > 0 ? (
    users.map((user) => (
      <li key={user.id}>
        {user.name}, {user.email}
      </li>
    ))
  ) : (
    <li>No users to display</li>
  )}
</ul>

<div className={styles['button-container']}>
          <button
          className={styles.button}
            onClick={() => setCurrentPage(prevPage => prevPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
          className={styles.button}
            onClick={() => setCurrentPage(prevPage => prevPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};


