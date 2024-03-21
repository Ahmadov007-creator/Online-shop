import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])


  return (
    <div className="App">
      <h1 className='shop'>Online shop</h1>
      <div className="container">
      <ul className='list__product'>
        {
          products.map((item, index) => (

            <li key={index} className="d-flex align-items-center">
              <div className="card" style={{ width: '18rem'}}>
                <img src={item.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button onClick={() => setProduct(item)} className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{product.title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img className='w-100' src={product.image} alt="img" />
              <p className='font'>{product.description}</p>
              <p className='p_price'>{`Price of item: ${product.price}`}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
