import { useEffect, useState } from "react";

const AsiaFlags = (props) => {
    const [AsiaList, setAsiaList] = useState([])
    

    useEffect(() => {
        let fetchAsia = async () => {
            let response = await fetch('https://restcountries.com/v3.1/region/asia');
            let json = await response.json();
          
            setAsiaList(json)
    
        }
        fetchAsia()
    }, []);



    return (
    <div>
      <ul>
        {AsiaList.map((country, index) => (
          <li key={index}>
            <b>{country.name.common} </b>
            <img src={country.flags.png} style={{ height: "30px", width: "auto", marginLeft: "10px", verticalAlign: "middle",}}
            onClick={() => props.showMoreInfo(country)} />

            {props.showInfo === country && (
              <div style={{ backgroundColor: "beige", padding: "5px", margin: "20px", borderRadius: "10px"}}>
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

export default AsiaFlags;