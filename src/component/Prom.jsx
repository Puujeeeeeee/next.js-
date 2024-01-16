export const New = (props) => {
  const { newArray } = props;
  console.log(newArray);
  return (
    <div>
      {newArray.map((element) => (
        <div>hello: {element.name}</div>
      ))}
    </div>
  );
};
