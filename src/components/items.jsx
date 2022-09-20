import { useState } from 'react';
import Item from './item';

export default ({ title, items = [] }) => {
  const [filter, setFilter] = useState('');

  const visibleItems = items.filter((item) =>
    item.name.toLowerCase().startsWith(filter.toLowerCase()),
  );

  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <input
          id="add-new-item"
          className="w-full"
          type="text"
          value={filter}
          placeholder="Filter…"
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>

      <h2 className="font-bold text-2xl">{title}</h2>
      <ul>
        {visibleItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};
