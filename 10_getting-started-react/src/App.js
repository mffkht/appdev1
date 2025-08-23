import profile from './img/profile.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="profile-picture" src={profile} alt="picture"/>
      <h1 className="full-name">Name: Maffia Khate Guaro</h1>
      <h1 className="course">Course @ Year: BSIS 3RD Year</h1>
      <h1 className="fun-fact">Fun Fact: I Can Sleep All Day</h1>

      <h1 className="react">Why I Want to Learn React</h1>
      <p className="content">
        I want to learn React because it is one of the most popular tools for building modern websites and applications. Many developers and companies use it to make web pages faster, easier to use, and more interactive. I hope to create projects that are user-friendly and engaging while also improving my skills in web development. I believe this will help me gain more confidence in coding, prepare me for future opportunities in the tech industry, and guide me in becoming a better software professional.
      </p>
    </div>
  );
}

export default App;
