'use client';

import { useState, useEffect } from 'react';

type ItemCardapio = {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  categoria: number;
  categoria_nome: string;
};

export default function CardapioPage() {
  const [items, setItems] = useState<ItemCardapio[]>([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [carregando, setCarregando] = useState(true);

  // 1. Busca os dados da sua API
  useEffect(() => {
    fetch('https://cardapioapi-production-1b26.up.railway.app/api/items/')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setCarregando(false);
      });
  }, []);

  // 2. Extrai nomes únicos das categorias para os botões
  const categorias = ["Todos", ...new Set(items.map(item => item.categoria_nome))];

  // 3. Filtra a lista baseada no estado 'categoriaAtiva' usando o nome da categoria
  const itensFiltrados = categoriaAtiva === 'Todos' 
    ? items 
    : items.filter(item => item.categoria_nome === categoriaAtiva);

  if (carregando) return <p>Carregando cardápio...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Nosso Cardápio</h1>

      {/* Botões de Filtro */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaAtiva(cat)}
            className={`px-6 py-2 rounded-full transition-colors ${
              categoriaAtiva === cat 
              ? 'bg-gray-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Itens Filtrados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itensFiltrados.map(item => (
          <div key={item.id} className="border p-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="h-48 mb-4 rounded-sm flex items-center justify-center">
              {/* Se a API tiver imagem, use aqui */}
              <img src={item.imagem} className=" h-50 w-50 rounded-3xl" alt={item.nome}></img>
            </div>
            <h3 className="font-bold text-lg">{item.nome}</h3>
            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.descricao}</p>
            <div className="flex justify-between items-center">
              <span className="text-green-600 font-bold">R$ {item.preco}</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">{item.categoria_nome}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}