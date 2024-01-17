const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <h2>{props.val}</h2>
      <button>+</button>
      {"   "}
      <button>-</button>
    </div>
  );
};
export default Home;
