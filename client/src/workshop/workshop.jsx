
import { useState,useEffect } from "react";
import axios from 'axios'
const Workshop = () => {
    const [data, setData] = useState([]);
    const [id, setid] = useState("");
    const [classe, setclasse] = useState("");
    const [factworkers_wId, setfactworkers_wId] = useState("");
    const [reload,setReload]=useState(false)
    useEffect(() => {
      axios
        .get("http://localhost:3000/main/workshop")
        .then((response) => {
          setData(response.data); 
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  
    const handleAddproduct = () => {
      
      axios.post("http://localhost:3000/main/workshop/add", {classe:classe,factworkers_wId:factworkers_wId})
        .then((response) => {
          setData( response.data); 
          setReload(!reload)
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    };
  
  
  
    return (
      <div>
        <h2>Add workshop</h2>
        <form onSubmit={handleAddproduct}>
        <label>
            classe:
            <input type="text" name="name" onChange={(e)=>{setclasse(e.target.value)}} />
          </label>
          <label>
            wId:
            <input type="text" name="wId" onChange={(e)=>{setfactworkers_wId(e.target.value)}} />
          </label>

          <button type="submit">Add workshop</button>
        </form>
  
        <h2>Workshop List</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">classe</th>
              <th scope="col">factworkers_wId</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((shop, index) => (
              <tr key={index}>
                <th scope="row">{shop.id}</th>
                <td>{shop.classe}</td>
                
                
                <td>{shop.factworkers_wId}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};
export default Workshop;
