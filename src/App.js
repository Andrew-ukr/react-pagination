import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [dataBase, setDataBase] = useState([]);

  useEffect(() => {
    setDataBase(data[page]);
  }, [data, page]);

const handlePagination = (e) => {
  if (e.target.dataset.name === "next") {
    if (page === data.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  }
  if (e.target.dataset.name === "prev") {
        if (page === 0) {
          setPage(data.length - 1);
        } else {
          setPage(page - 1);
        }
  }
  window.scrollTo(0, 0);
}

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading ..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {dataBase &&
            dataBase.map((item) => (
              <Follower key={item.id} {...item}></Follower>
            ))}
        </div>
        {!loading && (
          <div className="btn-container">
            <button
              className="prev-btn"
              data-name="prev"
              onClick={(e) => handlePagination(e)}
            >
              prev
            </button>
            {data.map((item, i) => (
              <button
                key={i}
                className={i === page ? "page-btn active-btn" : "page-btn"}
                onClick={() => {setPage(i); window.scrollTo(0, 0);}}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="next-btn"
              data-name="next"
              onClick={(e) => handlePagination(e)}
            >
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
