// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

// const style={
//   box:{width:100, height:100, backgroundColor:"red",},
//   round:{width:100, height:100, backgroundColor:"green",borderRadius:50},
// };
// const Box =()=>
// {
//   return (<div style={style.box}>box</div>
//   );
// }
// const Round=()=>{
//   return (<div style={style.round}>round</div>);
// }
// export default function Home() {
//   return(
// <div>
//  <Box/>
// </div>
//   );
// }

// const style = {
//   body: { width: 1400, height: 2092, display:"flex",justifyContent:"center", },
//   card: { width: 390, height: 551, border: "2px solid red" }
// import { TextBox } from "@/compinent/Text";
// import { ImageBox } from "@/compinent/Shoes";
// const styles = {
//   imageContainer: { display: "flex", gap: 200, justifyContent: "center" },
// };

// const Body = () => {
// export default function Home() {
//   return (
//     <div style={style.body}>
//       <Card />
//     </div>
//   );
// };

// const Card = () => {
//   return <div style={style.card}>yubna</div>;
// };
// export default function Home(){
//   return(
//     <div>
//       <Body></Body>
//       <Body></Body>
//       <Body></Body>
//       <Body></Body>
//       <Body></Body>
//       <Body></Body>
//       <Body></Body>      <Body></Body>

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
//   )
//   );
// }

import { Zurag } from "@/compinent/Zurag";
export default function Home() {
  return <Main></Main>;
}

// const style = {
//   body: {
//     width: 1400,
//     height: 2092,
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: 20,
//     backgroundColor: "white",
// import { List } from "../component/List"; // Adjust the path accordingly
// const arr = [
//   {
//     name: "Puujee",
//     score: "100",
//   },
// };

// const Card = () => {
//   return <div style={style.card}></div>;
// };

// const Body = () => {
//   return (
//     <div style={style.body}>
//       <Zurag></Zurag>
//       <Zurag></Zurag>
//       <Zurag></Zurag> <Zurag></Zurag>
//       <Zurag></Zurag>
//       <Zurag></Zurag> <Zurag></Zurag>
//       <Zurag></Zurag>
//       <Zurag></Zurag>
//     </div>
//   );
// };

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
//       <Body />
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

// import { TextBox } from "@/compinent/Text";
// import { ImageBox } from "@/compinent/Shoes";
// const styles = {
//   imageContainer: { display: "flex", gap: 200, justifyContent: "center" },
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
// import List from "../component/List";
// import Listt from "../component/List2";
// import Listtt from "../component/List3";
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
//       <div style={styles.imageContainer}>
//         <ImageBox></ImageBox>
//         <ImageBox></ImageBox>
//         <ImageBox></ImageBox>
//       </div>
//       <div style={styles.imageContainer}>
//         <TextBox></TextBox>
//         <TextBox></TextBox>
//       </div>
//       {array.map(
//         (el, i) => (
//           (<List  firstname={el.firstname} />),
//           (<Listt lastname={el.lastname}></Listt>),
//           (<Listtt score={el.score}></Listtt>),

//         )
//       )}
//     </div>
//   );
// }

// import Main from "@/component/Main";

// export default function Home() {
//   const Body = () => {
//     return (
//       <div style={style.body}>
//         <Main></Main>
//       </div>
//     );
// import React, { useState } from "react";
// function MyComponent() {
//   const [name, setName] = useState("Guest");
//   const [age, setAge] = useState(0);
//   const updateName = () => {
//     setName("spongebob");
//   };

//   const updateAge = () => {
//     setAge(age + 3);
//   };
//   return (
//     <div>
//       <p>name:{name}</p>
//       <button onClick={updateName}>setName</button>
//       <p>nas:{age}</p>
//       <button onClick={updateAge}>setAge</button>
//     </div>
//   );
// }
// export default MyComponent;
