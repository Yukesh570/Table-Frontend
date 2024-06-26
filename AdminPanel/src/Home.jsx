import React from 'react';
import { TiTick } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'wouter';

function Home() {
  const tables = [
    { id: 1, name: 'TABLE 1', framePrice: 'Rs.500', timePrice: 'Rs.8/min', occupied: true, ac: true },
    { id: 2, name: 'TABLE 2', framePrice: 'Rs.500', timePrice: 'Rs.8/min', occupied: false, ac: true },
    { id: 3, name: 'TABLE 3', framePrice: 'Rs.300', timePrice: 'Rs.5/min', occupied: false, ac: true },
    { id: 4, name: 'TABLE 4', framePrice: 'Rs.500', timePrice: 'Rs.8/min', occupied: true, ac: false },
    { id: 5, name: 'TABLE 5', framePrice: 'Rs.700', timePrice: 'Rs.11/min', occupied: true, ac: true },
    { id: 6, name: 'TABLE 6', framePrice: 'Rs.900', timePrice: 'Rs.15/min', occupied: false, ac: false },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        {tables.map(table => (
          <Link to={table.occupied ? `/details/${table.id}` : `/user/${table.id}`} style={{ textDecoration: 'none', color: 'white' }} key={table.id}>
            <div className={`card ${table.occupied ? 'occupied' : 'not-occupied'}`}>
              <div className='card-inner'>
                <h3>{table.name}</h3>
                {table.occupied ? (
                  <IoCloseSharp className='card_icon' />
                ) : (
                  <TiTick className='card_icon' />
                )}
              </div>
              <div className='price-container'>
                {table.ac && (
                  <div className='ac'>
                    <h1>A/C</h1>
                  </div>
                )}
                <div className='price'>
                  <h1 className='frame-price'>table Price: {table.framePrice}</h1>
                  <h1 className='time-price'>Time Price: {table.timePrice}</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
