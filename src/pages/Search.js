import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";


const QUERY_SEARCH_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      emoji
      phone
      currency
    }
  }
`;

function Search() {
  const [countrySearch, setCountrySearch] = useState("");
  const [searchCountry, { data, loading, error }] = useLazyQuery(QUERY_SEARCH_COUNTRY);
    return (
      < div className="search">
 <main>
    <h1>
        Get Country details.
    </h1>
    <form className="form">
      <input type="text" placeholder="Enter Country Code(ex INR)" onChange={(event) => {
            setCountrySearch(event.target.value);
          }} />
                 <button
          onClick={() => {
            searchCountry({
              variables: { code: countrySearch.toUpperCase() },
            });
          }}
        >
          Search Country
        </button>
    </form>
  </main>
<div className="container">
    <div className="cardsSearch" >
                    {data && (
        <div className="cards-inner-search">
        <div>
         {data.country.emoji}
        </div>
        <div>
            <h3> Name : {data.country.name} | Native : {data.country.native} </h3>
            <h4> Continent : {data.country.continent} </h4>
            <h5> Capital: {data.country.capital} </h5>
            <h5> Currency: {data.country.currency} </h5>
            <h5> Country Code: {data.country.phone} </h5>
        </div>
      </div>
                          )}
    </div>
  </div>
  </div>    
  );
}

export default Search;
