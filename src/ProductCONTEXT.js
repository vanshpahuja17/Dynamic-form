// import React, { useState } from "react";
// import { createContext } from "react";

// const Itenary = createContext(null)

// const ItenaryProvider =({children})=>{
//     const [itenary,setItenary] = useState(["TV", "Computer"])

//     return(
//         <Itenary.Provider value={{itenary, setItenary}}>
//             {children}
//         </Itenary.Provider>
//     )
// }

// export {Itenary , ItenaryProvider}




import React, { useState } from "react";
import { createContext } from "react";

const Itenary = createContext(null)

const ItenaryProvider = ({children})=>{
    
    const [itenary, setItenary] = useState(["vansh", "Pahuja"])

    return(
        <Itenary.Provider value={{itenary, setItenary}}>
            {children}
        </Itenary.Provider>
    )
}

export {Itenary , ItenaryProvider}