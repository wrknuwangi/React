import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Footer = () => {
    const data = useContext(AppContext);
  return (
    <div>
        <h2>Have a Nice Day</h2>
      
    </div>
  );
};

export default Footer
