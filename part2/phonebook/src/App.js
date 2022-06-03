import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChangeName = (event) => setNewName(event.target.value);

  const handleAddPerson = (event) => {
    event.preventDefault();

    // check if name exists in array persons
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
    };

    setPersons(persons.concat(newPerson));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleAddPerson}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map((person, key) => {
        return <p key={key}> {person.name} </p>;
      })}

      {/* <div>
        <h1>Debug</h1>
        <p>newName={newName}</p>
      </div> */}
    </div>
  );
};

export default App;
