import { Products } from '@iteo/products';
import { Orders } from '@iteo/orders';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation" className="flex bg-slate-100">
        <ul className="flex justify-between rounded-md p-5 m-5 gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
          <li>
            <Link to="/products">Product Page</Link>
          </li>
          <li>
            <Link to="/orders">Orders Page</Link>
          </li>
        </ul>
      </div>
      <div className="m-10 bg-red-50">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                This is the generated root route.{' '}
                <Link to="/page-2">Click here for page 2.</Link>
              </div>
            }
          />
          <Route
            path="/page-2"
            element={
              <div>
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
      {/* END: routes */}
    </div>
  );
}

export default App;
