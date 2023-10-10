import { memo } from "react";

function List({
  items,
}: {
  items: {
    id: number;
    text: string;
    completed: boolean;
  }[];
}) {
  return (
    <ul className=''>
      {items.map((item) => (
        <li
          key={item.id}
          className='my-2 bg-white border border-gray-100 shadow-sm hover:shadow-lg p-2 rounded-md'
        >
          {item.completed ? <s>{item.text}</s> : item.text}
        </li>
      ))}
    </ul>
  );
}

export default List;
