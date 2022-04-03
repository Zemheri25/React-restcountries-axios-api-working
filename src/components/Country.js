import React from "react";

function Country({ item, deleteCountry }) {
  const country = item[0];
  console.log(country)
  const {flags} = country
  const {common} = country.name
  const {capital} = country;
  const {population} = country;


  return <div className="mycountry">
      <img src={flags.png} className = "flags" />
      <h2>{common}</h2>
      <h3>Caiptal : {capital[0]}</h3>
      <h4>Population : {population}</h4>
      <button className="button" onClick={() => deleteCountry(common)}>Delete Country</button>
  </div>;
}

export default Country;
