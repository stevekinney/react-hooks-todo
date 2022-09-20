import { useContext, useState } from 'react';
import { ItemsContext } from './context';

export default ({ onSubmit: handleSubmit }) => {
  const [value, setValue] = useState('');
  const { addItem } = useContext(ItemsContext);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addItem(value);
      }}
      className="flex flex-col gap-8"
    >
      <div className="flex gap-4 items-center">
        <label htmlFor="add-new-item" className="whitespace-nowrap">
          Add New Item
        </label>
        <input
          id="add-new-item"
          className="w-full"
          type="text"
          value={value}
          placeholder="New item…"
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <button className="w-full" disabled={!value}>
          Submit
        </button>
        <button
          className="secondary w-full"
          onClick={() => setValue('')}
          disabled={!value}
        >
          Clear
        </button>
      </div>
    </form>
  );
};
