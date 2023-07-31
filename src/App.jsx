import ImageDesktop from './assets/images/desktop.png';
import StartMenu from './components/StartMenu/StartMenu';

function App() {
  return (
    <>
      <main
        className="flex w-screen h-screen bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${ImageDesktop})` }}
      >
        <StartMenu />
      </main>
    </>
  );
}

export default App;
