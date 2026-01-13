import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
    
    const name = "Department of Examination";
    const address = "254, Pelawatta, Battaramulla";
    const phone = "+1 123456789";
    return (
        <AppContext.Provider value={[name, address, phone]}>
            {props.children}
        </AppContext.Provider>
    );
};

export default ContextProvider;