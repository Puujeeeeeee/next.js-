import List7 from "./List7";
function List6(props) {
  const PhoneNumber = 95129336;
  return (
    <div>
      <div>
        <p>PhoneNumber:{PhoneNumber}</p>
      </div>
      <List7>Ungu:{props.color}</List7>
    </div>
  );
}
export default List6;
