/**
 *
 * input search and it should show filtered results. in another variant- make it like google search
 * mock the api call
 * show suggestions
 * autocomplete input
 * debounce
 *
 *
 */

import { useEffect, useState } from "react";
import "./search.css";

export const SearchFilterApp = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredResults, setFilteredResults] = useState(users);

  const [loader, setLoader] = useState(false);
  console.log("search term", searchTerm);
  //step 1- fetch all users and display

  const fetchAllUser = async () => {
    setLoader(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });

    const data = await res.json();

    setUsers(data);
    setLoader(false);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  //   iflter

  const searchFilter = () => {
    let filteredRes = users.filter((item) =>
      item.title.includes(searchTerm.toLowerCase())
    );

    console.log("filtered", filteredRes);

    setFilteredResults(filteredRes);
  };

  useEffect(() => {
    searchFilter();
  }, [searchTerm, users]);

  return (
    <>
      <h1>Not So Google Search</h1>
      <div className="search-container">
        <input
          type="search"
          placeholder="Enter your keywords"
          name=""
          id=""
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <ul className="suggestions-hidden">
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>
      </div>

      <div className="filter-results">
        <p>Showing {users.length} results</p>

        {loader && <h1>Loadingggggggggg</h1>}

        {users.length > 0 ? (
          filteredResults.map((user, index) => (
            <li key={user.id}>
              {" "}
              {index + 1} - {user.title}
            </li>
          ))
        ) : (
          <p className="no-users">No users</p>
        )}
      </div>
    </>
  );
};
