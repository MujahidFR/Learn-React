function App() {
  const title = "Welcome To My React App";
  const age = 20;
  const link = "https:www.YouTube.com";

  return (
    <div className="App">
      <h2>{title}</h2>
      <h2>{age * 2}</h2>
      <a href="link">link</a>
    </div>
  );
}

export default App;
