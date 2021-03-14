import React from 'react' ;
import '../style/pokecard.css';
const pokeApiSrc='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// const pokeApiSrc='htttps://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
// let toPadThree=((number)=>number<=999 ? `00 ${number}`.slice(-3):number);
class PokeCard extends React.Component{ 
     render(){
    let imageSrc=`${pokeApiSrc}${this.props.id}.png`;
            return(
                 <div className='poke-data'>
                        <h3>{this.props.name}</h3>
                        <div className='pokecard-image'>
                          <img src={imageSrc} alt='Charmander'/>
                        </div>
                        <h4 className='card-text'>{this.props.type}</h4>
                        <h4 className='card-text'>{this.props.exp}</h4>
                </div>
            );
        }
}
export default PokeCard;
 