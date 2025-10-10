import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchp } from '../slices/pslice';

export default function Book() { // Capitalized component name
  const dispatch = useDispatch();
  const { products, total } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchp());
  }, [dispatch]);

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}> {/* Always add a unique key */}
          <h1>{p.title}</h1>
        </div>
      ))}
    </div>
  );
}
