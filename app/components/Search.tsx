import React, { useState } from 'react';

export default function SearchComponent({ items }: { items: string[] }) {
  const [search, setSearch] = useState('');

  // Filtra os itens conforme a busca (opcional)
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Utilização:
// <SearchComponent items={['Maçã', 'Banana', 'Cereja']} />