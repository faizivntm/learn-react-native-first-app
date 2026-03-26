type Props = {
  name: string;
  id: number;
};

const items = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 1,
    name: "Orange ",
  },
  {
    id: 1,
    name: "Banana",
  },
  {
    id: 1,
    name: "Watermelon",
  },
];

const ListItem = ({}: Props) => {
  return (
    <div>
      <h1>List Buah-buahan</h1>
      <ul>
        {items.map((list) => {
          return <li>{list.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListItem;
