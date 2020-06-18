import React, { Component } from 'react'
import { formatNumber } from '../helpers/formatHelpers'
import css from '../header/header.module.css'



export default class Header extends Component {
    handleInputChange = (event) =>{//Pega o disparador do evento
        //mesma lógica do event.context += event.value
        const newText = event.target.value //Pega o valor que vai ser uma letra e adiciona com a que já esta no campo
        this.props.onChangeFilter(newText)//manda para o onchange do app que atualiza o valor com o novo valor
    }
    render() {
        const{filter ,countrieCount, population} = this.props //Filter pela primeira vez null
        return (//Quando entra no onchange o valor de filter é null
            <div className={css.flexrow}>
                <input type='text' placeholder="Filtro" value={filter} onChange={this.handleInputChange}></input> |  
                <span className={css.countriestotal}>Países:<strong> {countrieCount.length}</strong></span> |
                <span className={css.info}> População:<strong> {formatNumber(population)}</strong></span>
            </div>
        )
    }
}
