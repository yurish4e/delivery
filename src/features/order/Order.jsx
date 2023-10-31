// Test ID: IIDSAT

import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';

export async function loader({params}) {
  const order = await getOrder(params.orderId);
  return order;
}
function Order() {
  
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData()

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;


  const deliveryIn = calcMinutesLeft(estimatedDelivery);



  return (
    <div className='px-4 py-6 space-y-6'>
      <div className='flex items-center justify-between flex-wrap'>
        <h2 className='text-xl'>Order #{id} status</h2>

        <div className='space-x-2'>
          {priority && <span className='bg-red-500 rounded-full py-1 px-3'>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>

      <ul>
        {cart.map(item=><OrderItem key={item.id} item={item}/>)}
      </ul>

    </div>
  );
}


export default Order;
