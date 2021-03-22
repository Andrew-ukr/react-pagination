import { useState, useEffect } from "react";
import paginate from "./utils";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(paginate(data)); // в paginate ми формуємо новий мавив зі списком масивів із заданою кількостю значень в ньому
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { loading, data }; // із useFetch повертаємо обєкт із значеннями state, в подальшому при імпорті useFetch буде можливість деструктивувати { loading, data }
};
