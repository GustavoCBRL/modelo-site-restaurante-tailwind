"use client";
import React, { useState } from "react";
import SearchComponent from "../components/Search";

// Array com todos os itens do cardápio para busca
const menuItems = [
  'Batata Frita', 'Camarão Frito', 'Torradas', 'Bolinho de Bacalhau', 'Bruschetta', 'Coxinha',
  'Parmegiana de Frango', 'Camarão Grelhado', 'Risoto de Funghi', 'Picanha na Brasa', 'Salmão ao Molho', 'Massa ao Pesto',
  'Petit Gâteau', 'Cheesecake', 'Tiramisu', 'Brownie', 'Pudim de Leite', 'Pavlova',
  'Caipirinha', 'Suco Natural', 'Vinho', 'Refrigerante', 'Cerveja', 'Café Expresso'
];

export default function Cardapio () {
  const [currentView, setCurrentView] = useState("Entradas");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#9c9c9c] to-[#4d4d50] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      
      <div className="container text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">Cardápio</h1>
      </div>
      <div className="container relative p-2 m-3 text-center">
        <button
          className="sticky m-2 text-body bg-neutral-primary-soft box-border border border-default-medium hover:bg-gray-400 hover:text-heading focus:ring-1 focus:ring-neutral-tertiary shadow-gray-400 font-medium leading-5 rounded-full text-sm px-2 py-2.5 focus:outline-none"
          onClick={() => setCurrentView("Entradas")}
        >
          Entradas
        </button>
        <button
          className="sticky m-2 text-body bg-neutral-primary-soft border border-default-medium hover:bg-gray-400 hover:text-heading focus:ring-1 focus:ring-neutral-tertiary shadow-gray-400 font-medium leading-5 rounded-full text-sm px-2 py-2.5 focus:outline-none"
          onClick={() => setCurrentView("pratosPrinc")}
        >
          Pratos Principais
        </button>
        <button
          className="sticky m-2 text-body bg-neutral-primary-soft border border-default-medium hover:bg-gray-400 hover:text-heading focus:ring-1 focus:ring-neutral-tertiary shadow-gray-400 font-medium leading-5 rounded-full text-sm px-2 py-2.5 focus:outline-none"
          onClick={() => setCurrentView("sobremesas")}
        >
          Sobremesas
        </button>
        <button
          className="sticky m-2 text-body bg-neutral-primary-soft border border-default-medium hover:bg-gray-400 hover:text-heading focus:ring-1 focus:ring-neutral-tertiary shadow-gray-400 font-medium leading-5 rounded-full text-sm px-2 py-2.5 focus:outline-none"
          onClick={() => setCurrentView("bebidas")}
        >
          Bebidas
        </button>
      </div>
      <div className="container text-center mb-6">
        <input
          type="text"
          placeholder="🔍 Buscar no cardápio..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-full border border-default-medium bg-neutral-primary-soft text-body focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div className="content">
        {currentView === "Entradas" && <Entradas searchTerm={searchTerm} />}
        {currentView === "pratosPrinc" && <PratosPrinc searchTerm={searchTerm} />}
        {currentView === "sobremesas" && <Sobremesas searchTerm={searchTerm} />}
        {currentView === "bebidas" && <Bebidas searchTerm={searchTerm} />}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#9c9c9c] to-[#4d4d50] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
    </div>
  );
}

// Dados dos itens do cardápio
const entradasData = [
  { nome: 'Batata Frita', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop', desc: 'Exemplo de descrição de Batata Frita saborosa e crocante!' },
  { nome: 'Camarão Frito', img: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=400&h=300&fit=crop', desc: 'Delicioso camarão empanado e frito, servido crocante com molho especial da casa.' },
  { nome: 'Torradas', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop', desc: 'Torradas crocantes com azeite de oliva, tomate fresco e manjericão.' },
  { nome: 'Bolinho de Bacalhau', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=400&h=300&fit=crop', desc: 'Bolinhos tradicionais de bacalhau desfiado, temperados e fritos até ficarem dourados.' },
  { nome: 'Bruschetta', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop', desc: 'Pão italiano torrado com tomate picado, alho, manjericão fresco e azeite extra virgem.' },
  { nome: 'Coxinha', img: 'https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=400&h=300&fit=crop', desc: 'Tradicional coxinha de frango com massa macia e recheio cremoso, empanada e frita.' },
];

function Entradas({ searchTerm = "" }: { searchTerm?: string }) {
  const filtered = entradasData.filter(item => 
    item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mr-3 ml-3 content-center">
      {filtered.map((item) => (
        <div key={item.nome} className="inline-block m-3">
          <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-lg shadow-xs">
            <img className="rounded-lg" src={item.img} alt={item.nome} />
            <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{item.nome}</h5>
            <p className="mb-6 text-body">{item.desc}</p>
          </div>
        </div>
      ))}
      {filtered.length === 0 && (
        <div className="text-center text-body py-8">
          <p>Nenhum item encontrado para "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}

function EntradasOld() {
  return (
    <div className="container mr-3 ml-3 content-center">
      <div className="inline-block m-3">
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-lg shadow-xs">
          <img className="rounded-lg" src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop" alt="Batata Frita" />
          <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Batata Frita</h5>
          <p className="mb-6 text-body">Exemplo de descrição de Batata Frita saborosa e crocante!</p>
        </div>
      </div>

      <div className="inline-block m-3">
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-lg shadow-xs">
          <img className="rounded-lg" src="https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=400&h=300&fit=crop" alt="Camarão Frito" />
          <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Camarão Frito</h5>
          <p className="mb-6 text-body">Delicioso camarão empanado e frito, servido crocante com molho especial da casa.</p>
        </div>
      </div>

      <div className="inline-block m-3">
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-lg shadow-xs">
          <img className="rounded-lg" src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop" alt="Torradas" />
          <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Torradas</h5>
          <p className="mb-6 text-body">Torradas crocantes com azeite de oliva, tomate fresco e manjericão.</p>
        </div>
      </div>

      <div className="inline-block m-3">
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-lg shadow-xs">
          <img className="rounded-lg" src="https://images.unsplash.com/photo-1541529086526-db283c563270?w=400&h=300&fit=crop" alt="Bolinho de Bacalhau" />
          <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Bolinho de Bacalhau</h5>
          <p className="mb-6 text-body">Bolinhos tradicionais de bacalhau desfiado, temperados e fritos até ficarem dourados.</p>
        </div>
      </div>

      <div className="inline-block m-3">
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-lg shadow-xs">
          <img className="rounded-lg" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop" alt="Bruschetta" />
          <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Bruschetta</h5>
          <p className="mb-6 text-body">Pão italiano torrado com tomate picado, alho, manjericão fresco e azeite extra virgem.</p>
        </div>
      </div>

      <div className="inline-block m-3">
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-lg shadow-xs">
          <img className="rounded-lg" src="https://images.unsplash.com/photo-1630409346283-9e0e2e6a4cf8?w=400&h=300&fit=crop" alt="Coxinha" />
          <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Coxinha</h5>
          <p className="mb-6 text-body">Tradicional coxinha de frango com massa macia e recheio cremoso, empanada e frita.</p>
        </div>
      </div>
    </div>
  );
}

const pratosPrincData = [
  { nome: 'Parmegiana de Frango', img: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop', desc: 'Suculento filé de frango empanado, coberto com molho de tomate caseiro e queijo derretido.' },
  { nome: 'Camarão Grelhado', img: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop', desc: 'Camarões grandes grelhados na manteiga com ervas finas, acompanhado de arroz e legumes.' },
  { nome: 'Risoto de Funghi', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop', desc: 'Cremoso risoto italiano preparado com cogumelos frescos, vinho branco e parmesão.' },
  { nome: 'Picanha na Brasa', img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop', desc: 'Picanha nobre grelhada ao ponto, servida com farofa, vinagrete e batatas rústicas.' },
  { nome: 'Salmão ao Molho', img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop', desc: 'Filé de salmão grelhado com molho de maracujá, acompanhado de purê de batata-doce.' },
  { nome: 'Massa ao Pesto', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop', desc: 'Talharim fresco ao molho pesto de manjericão, com tomate seco e lascas de parmesão.' },
];

function PratosPrinc({ searchTerm = "" }: { searchTerm?: string }) {
  const filtered = pratosPrincData.filter(item => 
    item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mr-3 ml-3 content-center">
      {filtered.map((item) => (
        <div key={item.nome} className="inline-block m-3">
          <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-lg shadow-xs">
            <img className="rounded-lg" src={item.img} alt={item.nome} />
            <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{item.nome}</h5>
            <p className="mb-6 text-body">{item.desc}</p>
          </div>
        </div>
      ))}
      {filtered.length === 0 && (
        <div className="text-center text-body py-8">
          <p>Nenhum prato encontrado para "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}

const sobremesasData = [
  { nome: 'Petit Gâteau', img: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop', desc: 'Delicioso bolinho de chocolate com recheio cremoso, servido quente com sorvete de baunilha.' },
  { nome: 'Cheesecake', img: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=400&h=300&fit=crop', desc: 'Torta de queijo cremosa com calda de frutas vermelhas, uma sobremesa irresistível.' },
  { nome: 'Tiramisu', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop', desc: 'Clássico italiano com camadas de biscoito champagne embebido em café e creme de mascarpone.' },
  { nome: 'Brownie', img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop', desc: 'Brownie de chocolate belga, servido morno com sorvete e calda de chocolate quente.' },
  { nome: 'Pudim de Leite', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop', desc: 'Tradicional pudim de leite condensado com calda de caramelo, cremoso e irresistível.' },
  { nome: 'Pavlova', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop', desc: 'Merengue crocante por fora e macio por dentro, coberto com creme e frutas frescas.' },
];

function Sobremesas({ searchTerm = "" }: { searchTerm?: string }) {
  const filtered = sobremesasData.filter(item => 
    item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mr-3 ml-3 content-center">
      {filtered.map((item) => (
        <div key={item.nome} className="inline-block m-3">
          <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-lg shadow-xs">
            <img className="rounded-lg" src={item.img} alt={item.nome} />
            <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{item.nome}</h5>
            <p className="mb-6 text-body">{item.desc}</p>
          </div>
        </div>
      ))}
      {filtered.length === 0 && (
        <div className="text-center text-body py-8">
          <p>Nenhuma sobremesa encontrada para "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}

const bebidasData = [
  { nome: 'Caipirinha', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop', desc: 'Clássica caipirinha brasileira feita com cachaça, limão fresco, açúcar e gelo.' },
  { nome: 'Suco Natural', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', desc: 'Sucos frescos de frutas tropicais: laranja, maracujá, abacaxi ou morango.' },
  { nome: 'Vinho', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop', desc: 'Seleção especial de vinhos tintos, brancos e rosés das melhores vinícolas.' },
  { nome: 'Refrigerante', img: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop', desc: 'Variedade de refrigerantes gelados: cola, guaraná, laranja e limão.' },
  { nome: 'Cerveja', img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop', desc: 'Cervejas artesanais e importadas, sempre geladas. Opções Pilsen, IPA e Stout.' },
  { nome: 'Café Expresso', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop', desc: 'Café expresso cremoso, cappuccino, latte ou macchiato feitos com grãos selecionados.' },
];

function Bebidas({ searchTerm = "" }: { searchTerm?: string }) {
  const filtered = bebidasData.filter(item => 
    item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mr-3 ml-3 content-center">
      {filtered.map((item) => (
        <div key={item.nome} className="inline-block m-3">
          <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-lg shadow-xs">
            <img className="rounded-lg" src={item.img} alt={item.nome} />
            <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{item.nome}</h5>
            <p className="mb-6 text-body">{item.desc}</p>
          </div>
        </div>
      ))}
      {filtered.length === 0 && (
        <div className="text-center text-body py-8">
          <p>Nenhuma bebida encontrada para "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}
