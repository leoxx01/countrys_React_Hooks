import React, {useState,useEffect } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/countries/header/Header';


export default function App(){
  const [allCountries, setAllCountries ] = useState([])
  const [filterCountries, setFilterCountries] = useState([])
  const [filterPopulation, setFilterPopulation] = useState(0)
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
   const fetchStates = async () =>{
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const json = await res.json()

    const allContries = json.map(({name, numericCode,flag,population})=>{
      return{
        id: numericCode,
        name,
        filtername: name.toLowerCase(),
        flag,
        population,
      }
    })
    setAllCountries(allContries)
    const filterPopulation = calculateTotalPopulation(allContries)
    setFilterCountries(Object.assign([],allContries))
    setFilterPopulation(filterPopulation)
  }
  fetchStates()
  }, [])
  const calculateTotalPopulation = (countries) =>{
    const filterPopulation = countries.reduce((acc,cur)=>{
      return acc + cur.population
    },0)

    return filterPopulation
  }
  
  const handleChangeFilter = (newFilter) =>{
    setFilter(newFilter)
    const filterLowerCase = newFilter.toLowerCase()
    const filterCountries = allCountries.filter((countrie) =>{
     return countrie.filtername.includes(filterLowerCase)
    })
    const filterPopulation = calculateTotalPopulation(filterCountries)
    setFilterPopulation(filterPopulation)
    setFilterCountries(filterCountries)
  }
    return (<div className="container" >
      <h1 className="center">React Countries</h1>
      <Header filter={filter} population={filterPopulation}countrieCount={filterCountries} onChangeFilter={handleChangeFilter}/>
      <Countries countries={filterCountries}/>
      </div>)
}
