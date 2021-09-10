import Layout from './layout/Layout'
import AppProvider from './context/AppContext'


import './style/css/App.css'

function App() {
  return (
    <>
      <AppProvider>
        <Layout />
      </AppProvider>
    </>
  );
}

export default App;
