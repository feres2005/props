import React from "react"
function ProductTable(props){


  return(
      <div>
          <h2>clothes and electronic </h2>

<table>
  <tr>
    <th>cateforie</th>
    <th>price </th>
    <th>name</th>
  </tr>
{
    props.products.map((products)=> ( <tr>
        <td>{products.categorie}</td>
        <td>{products.price}</td>
        <td>{products.name}</td>
      </tr>))
}
  </table>
      </div>
  )}
  export default ProductTable