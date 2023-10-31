import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkButton({ children, to }) {
  if (to === '-1')
    return <button onClick={() => navigate(-1)}>&larr; Go back</button>;
  return (
    <Link
      to={to}
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}
