import { useState } from "react";
import "./table.css"

  let Table=(props)=>{
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 10;
  
    const currentData = props.mydata.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(props.mydata.length / 5);
  
    const handlePrevPage = () => {
      setCurrentPage(currentPage - 1);
    };
  
    const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
    };
    return(
        <div className="tablecss">
    <table className="data" > 
        <thead className="table"> 
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>category</th>
            <th>domain</th>
            <th>createdon</th>
            <th>valid-until</th>
            <th>entries</th>
          </tr>
        </thead>
        <tbody>
          {props.mydata.map(item => (
            <tr scope="row">
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.domain}</td>
              <td>{item.createdOn}</td>
              <td>{item.validUntil}</td>
              <td>{item.entries}</td>
            </tr>
          ))}
        </tbody>

      </table>
      <button className="button" disabled={currentPage === 1} onClick={handlePrevPage}>
          Prev
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button  className="button"   disabled={currentPage === totalPages} onClick={handleNextPage}>
          Next
        </button>
      </div>
      
      )

  


  }
  export default Table