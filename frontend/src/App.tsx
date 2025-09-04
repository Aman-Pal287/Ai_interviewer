import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"

const App: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App;