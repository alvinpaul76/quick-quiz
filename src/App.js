import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Quiz from './components/quiz/Quiz';
import Instructions from './components/quiz/Instructions';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/quiz" exact component={Quiz} />
      <Route path="/quiz/instructions" exact component={Instructions} />
    </Router>
  );
}

export default App;
