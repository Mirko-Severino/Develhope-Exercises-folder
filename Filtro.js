import React, { useMemo } from "react";

export default function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age >= 18);
  }, [list]);

  return (
    <>
      <h1>FitleredList</h1>
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>{`${item.name} ha ${item.age} anni`}</li>
        ))}
      </ul>
    </>
  );
}
