export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">You don't have anything on your list. </p>;
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You are packed! `
          : ` You have ${numItems} items on your list, and you already packed ${numPacked} ${percentage}% `}
      </em>
    </footer>
  );
}
