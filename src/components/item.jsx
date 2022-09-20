import { useContext } from 'react';
import { ItemsContext } from './context';

export default ({ name, packed, id }) => {
  const { toggleItem, removeItem } = useContext(ItemsContext);

  return (
    <li className="flex items-center gap-2 mb-2">
      <input
        type="checkbox"
        checked={packed}
        id={`item-${id}`}
        onChange={() => toggleItem(id)}
      />
      <label htmlFor={`item-${id}`}>{name}</label>
      <button className="small secondary" onClick={() => removeItem(id)}>
        Remove
      </button>
    </li>
  );
};
