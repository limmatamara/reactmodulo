import Counter from './Components/Counter';
import Mirror from './Components/Mirror';
import Texted from './Components/Texted'
import CountProvider from './Context/Count';
import TextProvider from './Context/Text';

function App () {
  return (
    <>
    <CountProvider>
      <Counter/>
      <hr/>
      <Mirror/>
    </CountProvider>

    <TextProvider>
      <Texted/>
    </TextProvider>

    </>
  );
}

export default App;