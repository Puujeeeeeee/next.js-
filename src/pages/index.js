// import { TextBox } from "@/compinent/Text";
// import { ImageBox } from "@/compinent/Shoes";
// const styles = {
//   imageContainer: { display: "flex", gap: 200, justifyContent: "center" },
// };

// export default function Home() {
//   return (
//     <div>
//       <div style={styles.imageContainer}>
//         <ImageBox></ImageBox>
//         <ImageBox></ImageBox>
//         <ImageBox></ImageBox>
//       </div>
//       <div style={styles.imageContainer}>
//         <TextBox></TextBox>
//         <TextBox></TextBox>
//       </div>
//     </div>
//   );
// }

// import Main from "@/component/Main";

// export default function Home() {
//   return (
//     <div>
//       <Main></Main>
//     </div>
//   );
// }

// import { List } from "../component/List";
// const arr = [
//   {
//     name: "Puujee",
//     score: "100",
//   },
//   {
//     name: "Bukbayr",
//     score: "99",
//   },
// ];
// const arr2 = [
//   {
//     name: "Sambuu",
//     score: "78",
//   },
//   {
//     name: "Gurmaa",
//     score: "98",
//   },
// ];
// export default function Home() {
//   return (
//     <div>
//       <div>
//         {arr.map((el) => (
//           <List Ner={el.name} Onoo={el.score}></List>
//         ))}
//       </div>
//       <div>
//         {arr2.map((el) => (
//           <List Ner={el.name} Onoo={el.score}></List>
//         ))}
//       </div>
//     </div>
//   );
// }

// <div>
//   <List name="puujee" age={30} isStedent="true" score={56}></List>
//   <List name="Bata" age={36} isStedent="false" score={56}></List>
//   <List name="Dulam" age={65} isStedent="true" score={56}></List>
// </div>

// const gogoBolgii = {
//   styles: {
//     width: 200,
//     height: 100,
//     border: "2px solid black",
//     display: "flex",
//   },
// };
// const Body = {
//   styles: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 20,
//   },
// };
// <div style={Body.styles}>
//   <div style={gogoBolgii.styles}>
//     <List name="puujee" garchig="dotood ayalal juulchlal"  />
//   </div>
//   <div style={gogoBolgii.styles}>
//     <List name="puujee" garchig="dotood ayalal juulchlal" />
//   </div>
//   <div style={gogoBolgii.styles}>
//     <List name="puujee" garchig="dotood ayalal juulchlal" />
//   </div>
//   <div style={gogoBolgii.styles}>
//     <List name="puujee" garchig="dotood ayalal juulchlal" />
//   </div>
// </div>
// props 5
// import React from "react";
// import List from "../component/List";
// import Listt from "../component/List2";
// import Listtt from "../component/List3";
// const style = {
//   Border: {
//     width: 250,
//     height: 50,
//     border: "2px solid red",
//   },
// };
// const array = [
//   {
//     firstname: "Duluu",
//     score: "100",
//     lastname: "Bill",
//     age: 45,
//     work: "Pinecone",
//   },
//   {
//     firstname: "Dashka",
//     score: "69",
//     lastname: "bat",
//     age: 34,
//     work: "Pinecone",
//   },
// ];

// export default function Home() {
//   return (
//     <div>
//       {array.map((el) => (
//         <div>
//           <List firstname={el.firstname} />
//           <Listt lastname={el.lastname} />
//           <Listtt score={el.score} />
//         </div>
//       ))}
//     </div>
//   );
// }

// 😇😇😇😇😇😇😇😇
import React, { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const updateName = () => {
    setName("spongebob");
    setName("lebron");
  };
  const updateAge = () => {
    setAge(age - 1);
  };
  return (
    <div>
      <p>name:{name}</p>
      <button onClick={updateName}>setName</button>
      <p>nas:{age}</p>
      <button onClick={updateAge}>setAge</button>
      <p>nas:{age}</p>
      <button onClick={updateAge}>setAge</button>
    </div>
  );
}
export default MyComponent;
