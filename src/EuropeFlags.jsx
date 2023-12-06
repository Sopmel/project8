import { useEffect, useState } from "react";
const EuropeFlags = (props) => {
    const [EuropeList, setEuropeList] = useState([])
    

useEffect(() => {
    let fetchEurope = async () => {
        let response = await fetch('https://restcountries.com/v3.1/region/europe');
        let json = await response.json();
        
        setEuropeList(json)

    }
    fetchEurope()
}, []);



    return (
      <div>
      <ul>
        {EuropeList.map((country, index) => (
          <li key={index}>
            <b>{country.name.common} </b>
            <img src={country.flags.png} style={{ height: "30px", width: "auto", marginLeft: "10px", verticalAlign: "middle",}}
            onClick={() => props.showMoreInfo(country)} />

            {props.showInfo === country && (
              <div style={{ backgroundColor: "beige", padding: "10px", margin: "20px", borderRadius: "10px"}}>
                <p>Country: {country.name.common}</p>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
              </div>

            )}

          </li>
        ))}
      </ul>
    </div>
    )
}

export default EuropeFlags;