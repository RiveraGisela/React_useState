import { useState } from 'react'

export const States=()=>{
    const [cambio, setCambio]= useState(0)
    const[color, setColor]= useState('red')
    const[estilo,setEstilo]=useState('gray')

    
    return(
    <>
    <div style={{backgroundColor:color}}>
    <button onClick={()=>setCambio(cambio+1)}>click</button> 
    <h2 style={{color:estilo}}>Tu has clickeado {cambio}</h2> 
    <input onChange={(event)=>setColor(event.target.value)} placeholder="ingrese un color " type="text" />
    </div>
    </>
    )
}




// export const States = () => {

//     const[fruits, setfruits] = useState(['manzana', 'pera','limon'])
//     const[UlFruits, setUlFruits] =useState([])
//     const[inputValue, setinputValue] = useState ('')
//     const handleListFruits = () =>{
//         setUlFruits([fruits, inputValue])
//         setinputValue('')
//     }
//     const handlechangeinput =(event) =>{
//         setinputValue(event.target.value)
//     }


    
// return (
//     <>
//     <input value={inputValue} onChange={handlechangeinput} placeholder= "Ingresa una fruta" type="text" />
//     <button onClick={handleListFruits}>Listar frutas</button>
//     <ul>
//         {
//             UlFruits.map(fruit => <li>{fruit}</li>)
//         }
//     </ul>

//     </>
//     )
// }


    
    
    
    /* {const[inputName, setInputName] =useState('')
    const[name, setname] =useState('usuario')
    const handleSetName = () =>{
        setname(inputName)
    }
    
    <h1>Bienvenido{name}</h1>
<input onChange={(event)=>setInputName(event.target.value)} type="text" />
<button onClick={handleSetName}>Saludar</button> }*/
