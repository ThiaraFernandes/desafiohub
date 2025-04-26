import { useState } from 'react';
import { Container, FormGroup, ResultList } from './Buscador.styled';
import { FiPhone } from 'react-icons/fi';

interface Contact {
  id: number;
  name: string;
  telephone: number;
}

const contactsInfo: Contact[] = [
  { id: 1, name: "João", telephone: 55123456789 },
  { id: 2, name: "Maria", telephone: 55987654321 },
  { id: 3, name: "Pedro", telephone: 55456789123 },
  { id: 3, name: "José", telephone: 55456789123 },
];

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleSearch = () => {
    const contact = contactsInfo.find(
      (contact) => contact.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (contact) {
      setContacts([contact]); // apenas o contato encontrado
    } else {
      setContacts([]); // limpa se não encontrou nada
    }
    setInputValue(''); // limpa o campo
  };

  const handleClear = () => {
    setContacts([]);
    setInputValue('');
  };

  const handleCapitalize = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <Container>
        <p style={{ fontSize: '0.9rem', color: '#939191', marginBottom: '8px' }}>
          Exemplos: João, Maria, Pedro, José
        </p>
      <FormGroup>
        <input
          type="text"
          placeholder="Digite o nome do contato"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSearch}>Procurar Contato</button>
        {contacts.length > 0 && (
          <button onClick={handleClear} style={{ backgroundColor: '#dc3545' }}>Limpar</button>
        )}
      </FormGroup>

      {contacts.length > 0 && (
        <ResultList>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <span>{handleCapitalize(contact.name)}</span>
              <span><FiPhone style={{ marginRight: '5px', color: '#29AD17' }} />{contact.telephone}</span>
            </li>
          ))}
        </ResultList>
      )}
    </Container>
  );
}

export default Home;
