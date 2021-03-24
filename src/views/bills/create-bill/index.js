import React from 'react'
import data from 'src/data';
import './style.css';


function createBills(props) {
    return (
        <div className="grid-container">
      <main>
        <div>
          <div className="row center">
            {
              data.products.map(product =>(
                <div className="card">
                      <img className="card-img-top" src={product.image} alt={product.name} />
                      <div className="card-body">
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                            <div className="price">{product.price}</div>
                        </div>

                        <a href="#" className="btn btn-primary">Add to Cart +</a>
                    </div>
                </div>
              //  <div className="row center">
              //   <div className=" col-md-3 card" >
              //       <img className="card-img-top" src={product.image} alt={product.name} />
              //       <div className="card-body">
              //         <h5 className="card-title">{product.name}</h5>
              //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              //         <a href="#" className="btn btn-primary">{product.price}</a>
              //       </div>
              //     </div>
              //   </div>
              ))
            }
            
          </div>
        </div>
      </main>
    </div>
    )
}

export default createBills
