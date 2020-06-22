import React from 'react'
import Countrie from './Countrie'
import css from './countries.module.css'

export default function Countries(props) {
        const {countries} = props
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
