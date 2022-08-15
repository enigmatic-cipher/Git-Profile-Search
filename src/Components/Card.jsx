import React, { useState } from "react";

function Card() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});

  const onChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((result) => {
        return result.json();
      })
      .then((value) => {
        console.log(value);
        setData(value);
      });
  };

  return (
    <>
      <div className="w-90 p-3 d-flex justify-content-center">
        <form className="w-50 d-flex" role="search" onSubmit={onSubmitHandler}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Profile"
            aria-label="Search"
            onChange={onChangeHandler}
          />
          <button className="btn btn-outline-success m-2" type="submit">
            Search
          </button>
        </form>
      </div>
      {username ? (
        <div className="d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">GitHub Profile</div>
            <img src={data.avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Name: {data.name}</h5>
              <p className="card-text">Username: {data.login}</p>
              <p className="card-text">
                No. of Public Repos: {data.public_repos}
              </p>
              <p className="card-text">
                No. of Public Gists: {data.public_gists}
              </p>
              <p className="card-text">Acount Created: {data.created_at}</p>
            </div>
          </div>
        </div>
      ) : (
        true
      )}
    </>
  );
}

export default Card;
