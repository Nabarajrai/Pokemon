// import React from 'react';
// import PokeCard from './PokeCard';

// class Pokedex extends React.Component {
//     static defaultProps={
//         pokemon:[
//             {id:4,name:'Charmander',type:'fire',base_experience:62},
//             {id:7,name:'Squirtle',type:'water',base_experience:63},
//             {id:11,name:'Metapod',type:'bug',base_experience:72},
//             {id:12,name:'Butterfree',type:'flying',base_experience:178},
//             {id:25,name:'Pikachu',type:'electric',base_experience:112},
//             {id:39,name:'Jiggypuff',type:'normal',base_experience:95},
//             {id:94,name:'Genger',type:'poison',base_experience:225},
//             {id:133,name:'Eevee',type:'normal',base_experience:65}
//         ]
//     };
// render(){
//     return (
//         <div>
//             {this.props.pokemon.map((p)=>{
//              <PokeCard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/> 
//              console.log(this.props.pokemon)
//             })}
//         </div>
//     )
// }
// }

// export default Pokedex;
// import React, { Component } from 'react'
// import PokeCard from './PokeCard';

//  class Pokedex extends Component {
//          static defaultProps={
//         pokemon:[
//             {id:4,name:'Charmander',type:'fire',base_experience:62},
//             {id:7,name:'Squirtle',type:'water',base_experience:63},
//             {id:11,name:'Metapod',type:'bug',base_experience:72},
//             {id:12,name:'Butterfree',type:'flying',base_experience:178},
//             {id:25,name:'Pikachu',type:'electric',base_experience:112},
//             {id:39,name:'Jiggypuff',type:'normal',base_experience:95},
//             {id:94,name:'Genger',type:'poison',base_experience:225},
//             {id:133,name:'Eevee',type:'normal',base_experience:65}
//         ]
//     };
//     render() {
//         return (
//             <div>
//               <h2>This is Pokemon Game</h2>
//               {this.props.pokemon.map((p,i)=>{
//                   return(
//               <PokeCard key={i} id={p.id} name={p.name} type={p.tpye} exp={p.base_experience}/>)
//     })}
//             </div>
//         )
//     }
// }
// export default Pokedex;
import React from 'react';
import PokeCard from './PokeCard';
import '../style/pokedex.css';
const Pokedex = ({pokemon,exp,isWinner}) => {
    let title;
    isWinner ? title=<h2 className='winner-hand'>Winner hand</h2>: title=<h2 className='loser-hand'>Loser hand</h2>;
    return (
        <div className='text-game'>
            <h2 >Poke Game</h2>
            {title}
            <h6>Total experience:{exp}</h6>
        <div className='poke-card'>
           {pokemon.map((p,i)=>
           <PokeCard key={i} id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
           )} 
        </div>
        </div>
    )
}
        Pokedex.defaultProps={
        pokemon:[
            {id:4,name:'Charmander',type:'fire',base_experience:62},
            {id:7,name:'Squirtle',type:'water',base_experience:63},
            {id:11,name:'Metapod',type:'bug',base_experience:72},
            {id:12,name:'Butterfree',type:'flying',base_experience:178},
            {id:25,name:'Pikachu',type:'electric',base_experience:112},
            {id:39,name:'Jiggypuff',type:'normal',base_experience:95},
            {id:94,name:'Genger',type:'poison',base_experience:225},
            {id:133,name:'Eevee',type:'normal',base_experience:65}
        ]
    };

export default Pokedex;

