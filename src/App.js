import './App.css';
import { Header } from "./components/Header";
import {Main} from "./components/Main";
import {Controlls} from "./components/Controlls";
import {useEffect, useState} from "react";
import {ALL_COUNTRIES} from "./config";
import axios from "axios";
import {List} from "./components/List";
import {Card} from "./components/Card";

function App() {
  const [countries, setCountries] = useState([])
    console.log(countries)
  useEffect(() => {
      axios.get(ALL_COUNTRIES).then(
          ({data}) => setCountries(data)
      )
  },[])
  return (
    <div className="App">
      <Header/>
        <Main>
            <Controlls/>
            <List>
                {
                    countries.map((c) => {
                        const countryInfo = {
                            img: c.flags.png,
                            name:c.name,
                            info:[
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                }
                            ]
                        }
                        return (
                            <Card key={c.name} {...countryInfo} />
                        )
                    } )
                }
            </List>
        </Main>
    </div>
  );
}

export default App;
