import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "991991991" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleChangeName = (event) => setNewName(event.target.value);

  const handleChangePhone = (event) => setNewPhone(event.target.value);

  const handleAddPerson = (event) => {
    event.preventDefault();

    // check if name exists in array persons
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      phone: newPhone,
    };

    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewPhone("");
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleAddPerson}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
          <div>
            number: <input value={newPhone} onChange={handleChangePhone} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map((person, key) => {
        return (
          <p key={key}>
            {person.name} - {person.phone}
          </p>
        );
      })}
    </div>
  );
};

export default App;
