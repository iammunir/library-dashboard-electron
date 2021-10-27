import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import './App.css';

function App() {

  const pingHandler = async (e) => {
    const res = await window.preload.ping("ping from front process");
    console.log(res);
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Button variant="contained" onClick={pingHandler}>Ping</Button>
      </Container>
    </div>
  );
}

export default App;
