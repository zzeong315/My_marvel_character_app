import React, { useEffect, useState } from 'react'
import Character from '../components/Character';
import styles from './Home.module.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const json = await ( await fetch ("https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023")).json();
    setCharacters(json.data.results);
    setLoading(false);
  }

  useEffect(() => {getCharacters()}, []);

  return (
    <div>
      {loading ? 
        <h1>Loading</h1> :
        <div className={styles.container}>
          {characters.map((item) => (
            <div key={item.id}>
              <Character 
                id={item.id}
                img={item.thumbnail.path}
                name={item.name}
              />          
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Home;
