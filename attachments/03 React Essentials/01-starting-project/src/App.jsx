import { useState } from 'react'; //all the useSomething are the so-called react hooks, you can only call them inside React Component functions or insider other custom React Hooks

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';


function App() {
  /* We're going to use the normal syntax, which passes all the props attributes one by one, and then the Spread Operator. This is a normal feature 
  of JavaScript (ES6) which spreads the contents of an iterable (like an array or object) into individual elements.

  If we wrote text between Components opening and closing tabs React is not going to print it on our page because it does not know where to put that content. 
    
  When our components can wrap other components or other content between their opening/closing tabs, this is called Component composition. They take a single piece of 
  renderable content, being an approach that's closer to normal HTML usage.

  We should remember that, in case we want to send some attributes to the handler event function we cannot use use this syntax onEvent={handlerFunction(parameters)}, but instead
  wrap the function like it follows onEvent{() => handlerFunction(parameters)}. If we don't need to pass any content, we can just write onEvent={handlerFunction}.

  By default, React Components execute only once. React compares the old output ("old JSX code") of our component function to the new ouput and applies any differences to the actual 
  website UI. 

  The useState hook accepts one parameter, which will be the default value, and it then returns an array with exactly two elements. So sometimes we use destructuring to take 
  each of the elements separately:
  -  The first element will be the current data snapshot for this component execution cycle. So at first, it will be the initial value stored in the components but it may change 
     if the component function is executed again.
  -  The second element is a state updating function that updates the stores value and tells React to re-execute the component function in which useState() was called. When we call
     React schedules this state update, and it then re-executes this component function. So the new state value will be updated after the component function is executed again. So, if
     we write setSomething(new_value); console.log(something); //we will get the last value in the console as the value hadn't been updated in the moment it was executed.

  These constants will be created every single time a function executes but React is the one who'll change their value.

  Remember there're some different ways to see if the state value is undefined yet or not:
  - {selectedTopic === undefined}
  - {!selectedTopic}

  For Rendering Content Conditionally, in case we just want to render something in case something's true and nothing otherwise, we can follow the syntax:
  {!selectedTopic ? ('No button has been selected') : null}, so null will mean we show nothing instead. 

  It's also typical to use the AND/OR operators in order to render content conditionally as it follows:
  {!selectedTopic && <p>'No button has been selected'</p>}. 

  We could also use an auxiliary variable to use like this: 

  let tabContent = <p>'No button has been selected'</p>
  if (selectedTopic) {
    <div>
      ...
    </div>
  }

  JSX is capable of dealing with arrays of renderable data, arrays of JSX code, for example. So, before we used this syntax in order to render each of the concepts that were 
  saved in the CORE_CONCEPTS object. But, what happens if the number of items may change with time? We were accesing the objects of the dictionary by their indexes, so if 
  all of a sudden there were not four, but three concepts we would get an error by doing: <CoreConcept {...CORE_CONCEPTS[3]} />. Instead of that we are going to use the map function. 

  Key prop? It is a special attribute you add to elements in a list, the key should be unique among siblings and React uses it internally to identify which elements have changed, 
  been added or removed while using the reconciliation algorithm (Virtual DOM diffing) to update the DOM efficiently. So if keys are missing or not unique: react may re-use wrong elements, 
  components may lose their state unexpectedly, and performance may degrade. 

  */
  const [ selectedTopic, setSelectedTopic ] = useState(); //We must call React Hooks on the top level, the must not be called in nested code statements (e.g., inside of if-statements)

  function selectHandler(selectedButton) {
    // selectedButton => 'Components', 'JSX', 'Props', 'State'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic); //the state updating function will schedule the 
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key= {conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'} 
              onSelect={() => selectHandler('components')}
            >
              Components</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'} 
              onSelect={() => selectHandler('jsx')}
            >
              JSX</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'} 
              onSelect={() => selectHandler('props')}
            >
              Props</TabButton>
            <TabButton 
              onSelect={() => selectHandler('state')}
              isSelected={selectedTopic === 'state'} 
            >
              State</TabButton>
          </menu>
          {!selectedTopic ? (
           <p>Please select a topic.</p>
           ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
           )}
        </section>
      </main>
    </div>
  );
}

export default App;
