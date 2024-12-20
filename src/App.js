import logo from './logo.svg';
import './App.css';
import ListeLivre from './EXE1/ListeLivre';
import TableauLivre from './EXE1/TableauLivre';
import Header from './EXE2/Header';
import Footer from './EXE2/Footer';
import ListeCardLivre from './EXE2/ListeCardLivre';
import Filter from './EXE3/Q2/Filter';
import Form from './EXE4/form';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  return(
    <div className='Body'>
      <Header/>
      <section className='ListTableGlobal'>
        <ListeLivre/>
        <TableauLivre/>
      </section>
      <section>
        <article className='CardGlobal'>
          <ListeCardLivre/>
        </article>
      </section>
      <section>
        <Filter/>
      </section>
      <Footer/>
    </div>
  )
}
export default App;
