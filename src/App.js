import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h2><img style={ { marginRight: "300px" } } width="100" height="100" src={logo} className="App-logo" alt="logo" />London My Favorite City</h2>
      </header>

      <section>
        <nav>
          <ul>
          </ul>
        </nav>
        
        <article 
          style={{ backgroundImage: "url('https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/uk/london/destinations-london-banner-mobile-1024x553.jpg')" }}
        >
          <h1>London My Favorite City</h1>
          <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
          <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>

          <iframe width="200" height="200" src="https://www.youtube.com/embed/SAaevusBnNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
       </article>
      </section>

      <footer>
        <p>Nombre del curso: Conceptualización de servicios en la nube</p>
        <p>Alumno: Edgar Gabriel Martinez Gonzalez</p>
        <p>Código: [220336498]</p>
        <p>Email: edgarggamartgo@gmail.com</p>

      </footer>
    </div>
  );
}
export default App;
