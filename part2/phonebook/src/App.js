import { useState } from "react";

const Input = ({ input }) => {
  return <input value={input.value} onChange={input.handleChange} />;
};

const Filter = ({ inputFilter }) => {
  return (
    <div>
      filter shown with <Input input={inputFilter} />
    </div>
  );
};

const PersonForm = ({ onSubmit, inputName, inputNumber }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <Input input={inputName} />
        <div>
          number: <Input input={inputNumber} />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Persons = ({ persons }) => {
  return persons.map((person) => {
    return (
      <p key={person.id}>
        {person.name} - {person.number} - {person.id}
      </p>
    );
  });
};

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

  const handleFilterName = (event) => setFilterName(event.target.value);

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

  // filter array persons with text
  const showPersons =
    filterName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filterName.toLowerCase())
        );

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        inputFilter={{ value: filterName, handleChange: handleFilterName }}
      />
      <h2>add a new person</h2>
      <PersonForm
        onSubmit={handleAddPerson}
        inputName={{ value: newName, handleChange: handleChangeName }}
        inputNumber={{ value: newNumber, handleChange: handleChangeNumber }}
      />
      <h2>Numbers</h2>
      <Persons persons={showPersons} />
    </div>
  );
};

export default App;
