import { useState } from "react";
import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js"





function App() {
  const [selectedTpoic, setselectedTpoic] = useState()
  function handleSelect(selectedButton) {
    setselectedTpoic(selectedButton)
    // console.log(selectedTpoic);
  }
  let tabContent = <p>Please Select a Topic</p>;
  if (selectedTpoic) {
    tabContent = (<div id="tab-content">
      <h3>
        {EXAMPLES[selectedTpoic].title}
      </h3>
      <p>
        {EXAMPLES[selectedTpoic].description}
      </p>
      <pre>
        <code>
          {EXAMPLES[selectedTpoic].code}
        </code>
      </pre>
    </div>
    );

  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              {...CORE_CONCEPTS[0]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[1]}
            />

            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />


          </ul>

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Compnents</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}> State</TabButton>
          </menu>

          {tabContent}

        </section >
      </main >
    </div >
  );
}

export default App;