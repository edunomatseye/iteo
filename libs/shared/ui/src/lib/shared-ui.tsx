import { Products } from '@iteo/products';
import { Orders } from '@iteo/orders';

export function SharedUi() {
  return (
    <div style={{ color: 'red' }}>
      <h1>Welcome to SharedUi!</h1>
      <Products />
      <Orders />
    </div>
  );
}

export default SharedUi;
