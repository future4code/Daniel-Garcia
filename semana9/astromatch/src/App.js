import GlobalStyle from "./Styles/Global"
import {Application} from "./style"
import Container from "./components/Container"

function App() {
  return (
    <Application>
      <GlobalStyle/>
      <Container/>
    </Application>
  );
}

export default App;
