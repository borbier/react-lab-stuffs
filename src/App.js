import React from 'react';
import SampleHeading from './components/SampleHeading.jsx';
import SampleComponent1 from './components/SampleComponent1.jsx';
import IdiotCounter from './components/IdiotCounter';

function App() {
  return (
    <div>
      <p>Sample Components with props parsing</p>
      <SampleHeading name="borBier" />
      <hr/>
      <p>Parsing some props to another components</p>
      <SampleComponent1 length={5} width={5} />
      <hr/>
      <p>Just an idiot counter (with React hook)</p>
      <IdiotCounter />
    </div>
  );
}

export default App;
