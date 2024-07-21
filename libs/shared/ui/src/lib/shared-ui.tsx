import { Products } from '@iteo/products';
import { Orders } from '@iteo/orders';

export function SharedUi() {
  return (
    <div style={{ color: 'red' }}>
      <h2>Welcome to SharedUi!</h2>
      <Products />
      <Orders />
    </div>
  );
}

export default SharedUi;
