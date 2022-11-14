import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allStore from '../store/action/index';

export default function KanyeQuoteView() {
  const dispatch = useDispatch();
  const [datas, setDatas] = useState('');
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem('fav')) || []);

  const quotes = useSelector(({ ListQuote }) => ListQuote);
  const addQuotes = useSelector(({ AddQuote }) => AddQuote);
  useEffect(() => {
    setDatas(quotes);
  }, [quotes]);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(allStore.fetchAllQuote());
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(allStore.addQuotes(datas));
    setFav([...fav, datas.quote]);
  };

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(fav));
  }, [fav]);
  return (
    <section style={{ textAlign: 'center' }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: '300px' }}
      />
      <h1 style={{ fontSize: '40px', marginTop: '10px' }}>Kanye-West Quote</h1>
      <h1>{datas.quote}</h1>
      <button onClick={handleChange}>Get Quote</button>
      <button onClick={handleAdd}>Add Favorite</button>
      {fav.map((e, i) => (
        <h1>{e.quote}</h1>
      ))}
    </section>
  );
}
