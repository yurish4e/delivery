import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="bg-yellow-500 px-4 py-3 uppercase border-b border-stone-500 sm:px-6 flex items-center justify-between ">
      <Link className="tracking-widest" to="/">
        Fast React Pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
