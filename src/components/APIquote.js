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
        <div key={item.author}>
          <p>{item.quote}</p>
          <p><i>{item.author}</i></p>
        </div>
      ))}
    </ul>
  );
};

export default APIquote;
