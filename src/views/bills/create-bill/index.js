import React from 'react'
import './style.css';


function createBills(props) {
    return (
        <div className="grid-container">
      <main>
        <div>
          <div className="row center">
            <div className="card">
              <a href="product.html">
                <img className="medium" src="../images/p8.jpg" alt="product" />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>Sandwich</h2>
                </a>
                <div className="price">$120</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
}

export default createBills
