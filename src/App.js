
import './App.css';
import Person from "./Components";
function App() {
  return (
    <div className="App">
      < Person
name={87}
age={19}
email="machado@gmail.com"
isMarried={false}
children={[]}
/>
<Person
name="Jack Davis"
age={29}
email="jack@gmail.com"
isMarried={true}
children={["Jennie,Jessica"]}
/>
<Person
name="Dwight Schrute"
age={23}
email="dwight@gmail.com"
isMarried={false}
children={["Moe"]}
   />
  
  <Person 
  name="Jim Halpert"
  age={28}
  email="jim@gmail.com"
  isMarried={true}
  children={["Cecilia","Phillip"]}
/>
</div>
  )
}

export default App;
