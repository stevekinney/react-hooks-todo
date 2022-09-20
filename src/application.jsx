import { useState } from 'react';
import AddNewItem from './components/add-new-item';
import Items from './components/items';

export const Application = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'iPod', packed: false },
    { id: 2, name: 'MacBook', packed: true },
    { id: 3, name: 'Paper Map', packed: false },
    { id: 4, name: 'Socks', packed: false },
  ]);

  const packedItems = items.filter((item) => {
    return item.packed;
  });

  const unpackedItems = items.filter((item) => {
    return !item.packed;
  });

  const addItem = (name) => {
    setItems((items) => [...items, { id: Date.now(), name, packed: false }]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) => {
        if (item.id !== id) return item;
        return { ...item, packed: !item.packed };
      }),
    );
  };

  return (
    <main className="flex flex-col mx-8 md:mx-auto my-8 gap-8 w-full lg:max-w-4xl items-start">
      <section className="border-8 border-pink-300 p-4 flex flex-col gap-8 shadow-pink-800 shadow-lg bg-white w-full">
        <AddNewItem onSubmit={addItem} />
      </section>
      <section className="border-8 border-pink-300 p-4 flex flex-col gap-8 shadow-pink-800 shadow-lg bg-white w-full">
        <Items
          items={unpackedItems}
          title="Unpacked Items"
          toggleItem={toggleItem}
          removeItem={removeItem}
        />
      </section>
      <section className="border-8 border-pink-300 p-4 flex flex-col gap-8 shadow-pink-800 shadow-lg bg-white w-full">
        <Items
          items={packedItems}
          title="Packed Items"
          toggleItem={toggleItem}
          removeItem={removeItem}
        />
      </section>
    </main>
  );
};

export default Application;
