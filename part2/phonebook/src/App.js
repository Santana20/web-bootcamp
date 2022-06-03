import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleChangeName = (event) => setNewName(event.target.value);

  const handleChangeNumber = (event) => setNewNumber(event.target.value);

  const handleAddPerson = (event) => {
    event.preventDefault();

    // check if name exists in array persons
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  const handleFilterName = (event) => {
    setFilterName(event.target.value);
  };

  // filter array persons with text
  const showPersons =
    filterName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filterName)
        );

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with{" "}
        <input value={filterName} onChange={handleFilterName} />
      </div>
      <h2>add a new person</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
          <div>
            number: <input value={newNumber} onChange={handleChangeNumber} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {showPersons.map((person) => {
        return (
          <p key={person.id}>
            {person.name} - {person.number} - {person.id}
          </p>
        );
      })}
    </div>
  );
};

export default App;
