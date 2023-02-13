import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';


const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([{}]);
  const { id } = useParams();

  const getDetailChar = async () => {
    const json = await (await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`)).json();
    {json !== undefined && 
    setCharacter(json.data.results[0]);
    setLoading(false);
    }
  }
  useEffect(() => {getDetailChar()}, []);


  return (
    <div className={styles.container}>
      {loading ? 
        <h1>Loading</h1> :
        <div>
          <div className={styles.main}>
            <img src={`${character.thumbnail.path}/portrait_incredible.jpg`} className={styles.image}/>
            <h1>{character.name}</h1>
          </div>
          <div>
            <p>You can find <span className={styles.accent}> {character.name}</span> here ⬇️</p>
            <h3 className={styles.subtitle}>Comics</h3>
            <ul className={styles.list}>
              {character.comics.items?.map((item, index) => (
              <li key={index}>{item.name}</li>
              ))}
            </ul>            
          </div>
          <div>
            <h3 className={styles.subtitle}>Series</h3>
            <ul className={styles.list}>
              {character.series.items?.map((item, index) => (
              <li key={index}>{item.name}</li>
              ))}
            </ul>            
          </div>
          <div>
            <h3 className={styles.subtitle}>Stories</h3>
            <ul className={styles.list}>
              {character.stories.items?.map((item, index) => (
              <li key={index}>{item.name}</li>
              ))}
            </ul>            
          </div>
          {/* <div>
            <h3>링크</h3>
            <p><a href={character.urls[0].url} target="_blank">detail</a></p>
            <p><a href={character.urls[1].url} target="_blank">wiki</a></p>
            <p><a href={character.urls[2].url} target="_blank">comic link</a></p>
          </div> */}
        </div>
      }
    </div>
  )
}

export default Detail;
