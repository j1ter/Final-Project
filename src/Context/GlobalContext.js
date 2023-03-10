import React, { useState, useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState([]);

  //эти константы предназначены только для альтернативного URL-адреса для загрузки на локальном компьютере и смартфоне (режим разработки)
  const url = ["http://192.168.15.120:3000/api/data.json", "http://localhost:3000/api/data.json"];
  const screen = window.innerWidth;
  //---

  useEffect(async () => {
    const response = await fetch(screen <= 375 ? url[0] : url[1]);
    const json = await response.json();
    setJobs(json);
    setData(json);
  }, []);

  useEffect(() => {
    if (filter != '') {
      setJobs(data);
      jobs.map(job => {
        filter.map(f => {
          setJobs(oldArray => (
            oldArray.filter(value => value.role === f || value.level === f || value.tools.includes(f) || value.languages.includes(f))
          ))
        })
      })
    } else {
      setJobs(data);
    }
  }, [filter]);

  return (
    <GlobalContext.Provider value={{ jobs, filter, setFilter }}>
      {children}
    </GlobalContext.Provider>
  );
};