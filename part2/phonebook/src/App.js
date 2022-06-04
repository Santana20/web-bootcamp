import { useState, useEffect } from "react";
import axios from "axios";

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
      </div>
      <div>
        number: <Input input={inputNumber} />
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
  const [persons, setPersons] = useState([]);
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

  // use effect
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
