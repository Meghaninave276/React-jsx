import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resmenu } from '../../slices/resslice';

export default function Home() {
    const dispatch = useDispatch();
    const { res, isLoading, error } = useSelector((state) => state.menu);

    useEffect(() => {
        dispatch(resmenu());
    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {res.map((r, index) => (
                <div key={index}>
                    <h1>{r.food_name}</h1>
                    <img src={r.image1} alt="" />
                </div>
            ))}
        </div>
    );
}
