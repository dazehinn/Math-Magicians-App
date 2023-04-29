import { useState, useEffect } from 'react';
import './APIquote.css';

const APIquote = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, sethasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.api-ninjas.com/v1/quotes?category=life';
      try {
        setIsLoading(true);
        const res = await fetch(url, {
          method: 'GET',
          headers: { 'X-Api-Key': 'rqBsI0z9wOGAqafKnCkkEA==KMMCPBuS2rX5v54e' },
          contentType: 'application/json',
        });
        const response = await res.json();
        setData(response);
      } catch (error) {
        sethasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>An error occured while loading data</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((item) => (
        <>
          <p key={item.author}>{item.quote}</p>
          <quote key={item.author}><i>{item.author}</i></quote>
        </>
      ))}
    </ul>
  );
};
// rqBsI0z9wOGAqafKnCkkEA==KMMCPBuS2rX5v54e

export default APIquote;
