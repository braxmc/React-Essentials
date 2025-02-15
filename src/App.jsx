import Header from './Components/Header/Header.jsx'
import CoreConcept from './Components/CoreConcept/CoreConcept.jsx';

import { CORE_CONCEPTS } from './data.js';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept 
              title={CORE_CONCEPTS[3].title} 
              description={CORE_CONCEPTS[3].description} 
              image={CORE_CONCEPTS[3].image} 
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
