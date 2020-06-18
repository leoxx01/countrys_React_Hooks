import React, { Component } from 'react'
import Countrie from './Countrie'
import css from './countries.module.css'

export default class Countries extends Component {
    render() {
        const {countries} = this.props
        return (
            <div className={css.border} className={css.flexrow}>
                     { 
                        countries.map(countrie =>{
                            return <Countrie key={countrie.id} countrie={countrie}/>
                        })
                    }
            </div>
        )
    }
}
