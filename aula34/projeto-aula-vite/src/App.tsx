import './App.css'
import Card from './components/Card';

const styles = {
  width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"
}
function App() {

  return (
    <>
    <div style = {styles}>
      <Card
      title="John Doe"
      email="nelzchorao@example.com"
      profilePic="NELZ.jpeg"
      />
      </div>
    </>
  )
}

export default App
