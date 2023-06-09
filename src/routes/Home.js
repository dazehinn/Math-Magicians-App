import styles from './Home.module.css';

const Home = () => (
  <div className={styles.main}>
    <h2>Welcome to our page</h2>
    <p>
      Math Magicians is an app for all lovers of mathematics. It is build with React and much love.
      As a user, you are given access to a simple calcular and quotes from famous persons about
      life. Feel free to explore this app and send your impressions by &nbsp;
      <a href style={{ color: 'lightblue', textDecoration: 'underline' }}>clicking here</a>
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quaerat eius quod ducimus iusto
      sit impedit etnam quos aliquam maiores expedita, similique libero voluptate nihil hic mollitia
      maxime modi soluta officia cumque error. Pariatur libero unde nobis cupiditate voluptatum
      ipsa itaque natus rem culpa.
    </p>
  </div>
);

export default Home;
