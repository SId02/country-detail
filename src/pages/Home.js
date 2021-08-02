import React from "react";
import { useQuery, gql } from "@apollo/client";


const QUERY_LIST_OF_COUNTRIES = gql`
  {
    countries {
      name
      capital
      emoji
      phone
    }
  }
`;

function Home() {
  const { data, loading, error } = useQuery(QUERY_LIST_OF_COUNTRIES);
  return (
    <div className="home">
      <main>
        <h1>Get List of Countires with details.</h1>
      </main>
      <div className="container">
        <div className="cards">
          {loading && <h3> Data is loading...</h3>}
          {error && <h3> {error.message} </h3>}
          {data &&
            data.countries.map((country, key) => {
              return (
                <div key={key} className="country cards-inner">
                  <h3 className="flag"> {country.emoji} </h3>
                  <div className="details">
                    <h4>Name : {country.name} </h4>
                    <p>
                      Capital: {country.capital} | Phone : {country.phone}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
  
}

export default Home;



