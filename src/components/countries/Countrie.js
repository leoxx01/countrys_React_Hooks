import React, { Component } from 'react'
import css from './countries.module.css'
import { formatNumber } from './helpers/formatHelpers'

export default class  extends Component {
    render() {
        const {countrie} = this.props
        console.log(countrie)
        return (  
            <div className={css.countrie}>
                <img src={countrie.flag} className={css.flag} />
                <p className={css.p}>{countrie.name}</p>
                <p className={css.p}><strong>({formatNumber(countrie.population)})</strong></p>
            </div>
        )
    }
}
