import { useState, CSSProperties } from "react";
import BounceLoader from "react-spinners/BounceLoader";


function Spinner() {
    let [loading, setLoading] = useState(true);
    
  
    return (
      
  
        <BounceLoader
          color='red'
          loading={loading}
          
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      
    );
  }
  
  export default Spinner;

