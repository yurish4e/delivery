import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/updateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id))
  const isInCart = currentQuantity >0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1
  }
  dispatch(addItem(newItem))
    // useSelector()
  }
  
  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ?'opacity-70 grayscale':''}`}/>
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize">{ingredients.join(', ')}</p>

        <div className="mt-auto flex items-center justify-between ">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
          {isInCart&&<>
          <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity}/>
          <DeleteItem pizzaId={id} /></>}
          {!soldOut
          &&!isInCart
          &&<Button onClick={handleAddToCart} type='small'>Add to cart</Button>}
          {/* {cart.find(el=>el.pizzaId === id)?<DeleteItem pizzaId={id} />:(!soldOut&&<Button onClick={handleAddToCart} type='small'>Add to cart</Button>)} */}
       
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
