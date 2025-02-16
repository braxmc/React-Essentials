import Header from './Components/Header/Header.jsx'
import CoreConcepts from './Components/CoreConcept/CoreConcepts.jsx';
import Examples from './Components/Examples/Examples.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
