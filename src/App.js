import Header from './components/Header'
import AccountCreate from './components/AccountCreate'
import BankServices from './components/BankServices'
import Ledger from './components/Ledger'

import './style/css/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <AccountCreate />
      <BankServices />
      <Ledger />
    </div>
  );
}

export default App;
