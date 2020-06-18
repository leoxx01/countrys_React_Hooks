import React, { Component } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/countries/header/Header';


export default class App extends Component {
  constructor(){
    super()
    this.state = {
        allCountries: [],
        filterCountries: [],
        filterPopulation:0,
        filter: ''

    }
  }
  async componentDidMount(){
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
    const filterPopulation = this.calculateTotalPopulation(allContries)
    this.setState({
      allCountries: allContries,
      filterCountries: Object.assign([],allContries),
      filterPopulation
    })
    
    console.log("aaa,-")
  }
  calculateTotalPopulation = (countries) =>{
    const filterPopulation = countries.reduce((acc,cur)=>{
      return acc + cur.population
    },0)

    return filterPopulation
  }
  
  handleChangeFilter = (newFilter) =>{
    this.setState({
      filter: newFilter
    })
    const filterLowerCase = newFilter.toLowerCase()
    const filterCountries = this.state.allCountries.filter((countrie) =>{
     return countrie.filtername.includes(filterLowerCase)
    })
    const filterPopulation = this.calculateTotalPopulation(filterCountries)
    this.setState({
      filterPopulation,
      filterCountries,
    })
    
  }
 
  render() {
    const {filter,filterCountries,filterPopulation,} = this.state
    return (<div className="container" >
      <h1 className="center">React Countries</h1>
      <Header filter={filter} population={filterPopulation}countrieCount={filterCountries} onChangeFilter={this.handleChangeFilter}/>
      <Countries countries={filterCountries}/>
      </div>)
  }
}
