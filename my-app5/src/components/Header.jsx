import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Header = () => {
    const data = useContext(AppContext);
    return (
      <div>
          <h1>My Project React</h1>
        
      </div>
    );
}

export default Header
