import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [imageurl, setImageUrl] = useState("");
  const [reload,setReload]=useState(false)

  console.log(data,"datatta");

  useEffect(() => {
    axios
      .get("http://localhost:3000/main/product")
      .then((response) => {
        setData(response.data.reverse()); 
        console.log("fffffffff"+JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reload]);

  const handleAddproduct = () => {
    
    axios.post("http://localhost:3000/main/product/add", {name:name,imageurl:imageurl})
      .then((response) => {
        console.log(response);
        setReload(!reload)


      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };



  const handleDeleteProduct = (name) => {
    axios.delete(`http://localhost:3000/main/product/${name}`)
      .then((res) => {
console.log(res); 
setReload(!reload)

      })
      .catch((error) => {
        console.error("Error deleting worker:", error);
      });
  };

  

  return (
    <div >
      <h2>Add Product</h2>
        <label>
          Name:
          <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} />
        </label>
        <label>
          Image URL:
          <input type="text" name="imageUrl"   onChange={(e)=>{setImageUrl(e.target.value)}}  />
        </label>
        <button type="submit" onClick={()=>{handleAddproduct()}}>Add Product</button>

      <h2>Products List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image URL</th>
          </tr>
        </thead>
        <tbody>
          { data.map((product, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td><img style= {{maxHeight:"200px", maxWidth:"150"}}src={product.imageurl} alt="yy" /></td>
              <td> <button onClick={()=>{handleDeleteProduct(product.name)}}>delete Product</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;