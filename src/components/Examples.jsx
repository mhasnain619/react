import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";


export default function Examples() {
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
        <Section title='Examples' id="examples">
            <Tabs buttons={
                <>
                    <TabButton isSelected={selectedTpoic === 'components'} onClick={() => handleSelect('components')}>Compnents</TabButton>
                    <TabButton isSelected={selectedTpoic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTpoic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTpoic === 'state'} onClick={() => handleSelect('state')}> State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section >
    )
}