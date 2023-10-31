import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
    const [query, setQuery] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        if(!query) return
        navigate(`/order/${query}`)
        setQuery('')
    }
    const navigate = useNavigate()

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='rounded-full px-4 py-2 text-sm placeholder:text-stone-400  w-28 sm:w-64 sm:focus:w-72 transition-all duration-300 outline-none focus:ring-yellow-500'
      />
    </form>
  );
}
