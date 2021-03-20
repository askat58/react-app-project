import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form">
        <div className="row">
          <div className="col-5">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control form-control-sm w-100"
              autoFocus
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary btn-sm"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-info btn-sm">
              Your location
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
