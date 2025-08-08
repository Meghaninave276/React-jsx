
import Quotes from './components/Quotes/Quotes';
import Data from './components/Data/Data';

function App() {
  return (
    <>
      {
        Data.map((item) => (
          <Quotes  quote={item.quote} author={item.author} />
        ))
      }
    </>
  );
}

export default App;
