import React from 'react';
import { Table } from 'reactstrap';
import useDarkMode from '../hooks/useDarkMode';
import './Player.css';

import { useFetchPlayers } from '../hooks/useFetchPlayers';

function Player() {
  const [theme, toggleTheme] = useDarkMode();
  const { players, loading, error } = useFetchPlayers();
  // console.log('', players);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      className='list'
      style={{
        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000'
      }}>
      <button onClick={toggleTheme}>Change Theme</button>
      <Table className='table'>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>Country:</td>
            <td>Searched:</td>
          </tr>
        </tbody>
      </Table>
      {players.map(player => (
        <div key={player.id}>
          <Table className>
            <tbody>
              <tr>
                <td>{player.name}</td>
                <td>{player.country}</td>
                <td>{player.searches}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      ))}
      {/* <div className='list'>
        <ul>
          STEP 3: Map over searchResults to see values in that array
          {players.map(player => {
            return <li key={player.id}>{player.name}</li>;
          })}
        </ul>
      </div> */}
    </div>
  );
}

export default Player;
