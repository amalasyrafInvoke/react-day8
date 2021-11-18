import { useState } from 'react';
import Header from './components/header';
import Section from './components/section';
import ContactForm from './containers/contactForm';

function App() {
  const [count, setCount] = useState(11);

  const handleAdd = () => {
    if (!(count + 1 > 20)) {
      setCount((prevState) => prevState + 1);
    }
  };
  const handleMinus = () => {
    if (!(count - 1 < 0)) {
      setCount((prevState) => prevState - 1);
    }
  };
  return (
    <div>
      <Header />
      <Section title='About Section'>
        <h1>Count: {count}</h1>
        <div className='flex items-center justify-center space-x-4'>
          <button
            onClick={handleAdd}
            className='border-2 border-black p-2 m-4 w-20 rounded-md'
          >
            Add
          </button>
          <button
            onClick={handleMinus}
            className='border-2 border-black p-2 m-4 w-20 rounded-md'
          >
            Minus
          </button>
        </div>
      </Section>
      <hr />
      <Section>
        <ContactForm />
      </Section>
    </div>
  );
}

export default App;
