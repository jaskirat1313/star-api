import React, { useState, useEffect } from "react";
import "./styles.css";
import People from "./People";
import Pagination from "./Pagination";
export default function App() {
  const [people, setPeople] = useState([]);
  const [showPerPage] = useState(9);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
    }
    fetchPeople();
  }, []);

  return (
    <>
      <p className="text-center">
        {pagination.start}-{pagination.end} charcters out of {people.length}
      </p>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row gy-4">
              {people
                .slice(pagination.start, pagination.end)
                .map((value, index) => {
                  return (
                    <People
                      key={index}
                      tittle={value.name}
                      gender={value.gender}
                      homeworld={value.homeworld}
                      skin_color={value.skin_color}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={people.length}
        />
      </div>
    </>
  );
}
