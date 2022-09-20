import { createContext, useState } from 'react';

export const ItemsContext = createContext([]);

export const ItemsProvider = ({ children }) => {
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
    <ItemsContext.Provider
      value={{
        packedItems,
        unpackedItems,
        addItem,
        removeItem,
        toggleItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
