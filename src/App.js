import { useState, useEffect } from 'react';
import Table from './Table';


function  App() {
 
  const [searchResults, setSearchResults] = useState([]);

 useEffect(() => {
   fetch(`https://serpindex-demo.svc.violetvault.com/swagger/v1/swagger.json`).then(response=>{
    return response.json();
   }).then(data=>{
    console.log(data)
    setSearchResults(data)

   }).catch(error=>{
    console.log("error")
   })
   

  
  }, [searchResults]);

  
 

  return (
    <div>
   

     <Table 
     mydata={searchResults}
       
          />
        
    <button onClick={App}> refresh</button>
    </div>
  );
}

export default App;


