import React, {useContext,useState, useEffect} from "react";

const ApiContext = React.createContext([])

export const UseApiContext = () => useContext(ApiContext);
//useContext es una funcion que ejecuta nuestro contexto. 

// crear el Provider

const ApiProvider = ({children}) => {

    const [data, setData] = useState([]);

    const API = 'https://jsonplaceholder.typicode.com/albums'

    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((res) => setData(res))
    },[])

    //Funcion para aplicar map
    const Mapeo = data.map(data => {
        return (
            {id: data.id, titulo: data.title}
            )
    }) 

    console.log(Mapeo)
    
    return(
        // nombre del contexto .Provider
        <ApiContext.Provider value={{
        data,
        Mapeo,
        }}>
        {children}
        </ApiContext.Provider>
    )
    } 

export default ApiProvider;