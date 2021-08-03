import React from "react";
import { AppContext } from "./Application";

const Header = () => {
        return <AppContext.Consumer>{
          ({name}) => {
                  return <p>Designed By {name}</p>
                 }
        }
        </AppContext.Consumer>
      }
      
      export default Header;
    
    