import "./App.css";
import axios from "axios";
import { useState } from "react";
import Country from "./components/Country";

function App() {
  
  const [form, setForm] = useState("");
  const [country, setCountry] = useState([]);

  const getApi = async () => {
    const response = await axios(`https://restcountries.com/v3.1/name/${form}`);
    setCountry([...country, response.data]);
  };

  const deleteCountry = (countryname) => {
    const newCountries = country.filter(item => item[0].name.common !== countryname);
    setCountry(newCountries)
  }
 

  const handleClick = () => {
    getApi();
    setForm("");
    
  };

  return (
    <div className="App">
      <h1 className="h1">Welcome to Form Of Countries</h1>
      <div className="form">
        <input
          type="text"
          onChange={(e) => setForm(e.target.value)}
          name="country"
          className="input"
          value={form}
        />
        <button className="button" onClick={handleClick}>
          Search Country
        </button>
      </div>

      <div className="countrydiv">
        {country?.map((item, index) => {
          return <Country item={item} key={index} deleteCountry = {deleteCountry}/>;
        })}
      </div>

      <footer className="footer">
        <h3>Made By Ömer Zemheri</h3>
      </footer>
    </div>
  );
}

export default App;
