
import { useState,useEffect } from "react";
import axios from 'axios'
const Workers=()=>{
  const [data, setData] = useState([]);
  const [username, setusername] = useState("");
  const [gradel, setgradel] = useState("");
  const [imageurl, setImageUrl] = useState("");
  const [reload,setReload]=useState(false)
  useEffect(() => {
    axios
      .get("http://localhost:3000/main/workers")
      .then((response) => {
        setData(response.data); 
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

      
  }, [reload]);

  const handleAddworker = () => {
    
    axios.post("http://localhost:3000/main/workers/add", {username:username,gradel:gradel,imageurl:imageurl})
      .then((response) => {
       console.log(response);
        setReload(!reload)
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };
  
 



  return (
    <div>

      <label>
          Username:
          <input type="text" name="name"  onChange={(e)=>{setusername(e.target.value)}} />
        </label>
        <label>
          Gradel:
          <input type="text" name="Gradel"   onChange={(e)=>{setgradel(e.target.value)}}/>
        </label>
        <label>
          Image URL:
          <input type="text" name="imageUrl"  onChange={(e)=>{setImageUrl(e.target.value)}}  />
        </label>
        <button type="submit" onClick={()=>{handleAddworker()}}>Add Product</button>

      

      <h2>Workers List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">username</th>
            <th scope="col">gradel</th>
            <th scope="col">Image </th>

          </tr>
        </thead>
        <tbody>
          {data.map((worker, index) => (
            <tr key={index}>
              <th scope="row">{worker.wId}</th>
              <td>{worker.username}</td>
              
              
              <td>{worker.gradel}</td>
              <td> <img style={{maxHeight:"200px", maxWidth:"150"}} src={worker.imageurl} alt="Worker Image" /></td>
              

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
   

  
export default Workers;
