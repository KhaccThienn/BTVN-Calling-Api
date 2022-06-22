import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Update() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = () => {
    axios
      .get("https://62abf205a62365888be2aae0.mockapi.io/blog")
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  function onDelete(id) {
    axios
      .delete(`https://62abf205a62365888be2aae0.mockapi.io/blog/${id}`)
      .then(() => {
        getData();
      });
  }

  return (
    <div className=" flex justify-center ">
      <table className="table table-striped table-hover table-hover-cell" >
        <thead>
          <tr>
            <th>ID</th>
            <th className="px-2 py-3">Name</th>
            <th>Class Name</th>
            <th>
              <Link to="/" className="btn btn-primary">ADD</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((val) => {
            return (
              <tr
                key={val.id}
              >
                <td>
                  {val.id }
                </td>
                <td>{val.fullname}</td>
                <td>{val.className}</td>
                <td>
                  <button>
                    <Link to={`/update/${val.id}`}>Update</Link>
                  </button>
                </td>
                <td>
                  <button
                    
                    onClick={() => onDelete(val.id)}
                  >
                    Delete
                    {/* <Link to="/delete">Delete</Link> */}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Update;
