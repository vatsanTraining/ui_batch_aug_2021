import React from "react";
import Header from './Header';

export const AppContext = React.createContext({ 
                name: 'Ramesh From Context'
    });

   export  const Application = () => {
          return ( <AppContext.Provider value={ {name: 'Ramesh'} }>
            <Header/>

          </AppContext.Provider>
        )
        }
        
    