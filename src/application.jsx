import { createContext, useContext, useState } from 'react';
import AddNewItem from './components/add-new-item';
import { ItemsContext } from './components/context';
import Items from './components/items';

export const Application = () => {
  const { packedItems, unpackedItems } = useContext(ItemsContext);

  return (
    <main className="flex flex-col mx-8 md:mx-auto my-8 gap-8 w-full lg:max-w-4xl items-start">
      <section className="border-8 border-pink-300 p-4 flex flex-col gap-8 shadow-pink-800 shadow-lg bg-white w-full">
        <AddNewItem />
      </section>
      <section className="border-8 border-pink-300 p-4 flex flex-col gap-8 shadow-pink-800 shadow-lg bg-white w-full">
        <Items items={unpackedItems} title="Unpacked Items" />
      </section>
      <section className="border-8 border-pink-300 p-4 flex flex-col gap-8 shadow-pink-800 shadow-lg bg-white w-full">
        <Items items={packedItems} title="Packed Items" />
      </section>
    </main>
  );
};

export default Application;
