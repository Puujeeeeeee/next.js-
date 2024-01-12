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
// };

// const Body = () => {
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

//     </div>
//   )
// }

// const style = {
//   body: { width: 1400, height: 2092, display: "flex", justifyContent: "center" ,flexWrap:"wrap", gap:20, },
//   card: { width: 390, height: 551, border: "2px solid red" }
// };

// import Information from '.puujee.js';
// const Card = () => {
//   return <div style={style.card}><export>{Information}</export></div>;
// };

// const Body = () => {
//   return (
//     <div style={style.body}>
//       <Card />
//       <Card></Card>
//       <Card />
//       <Card></Card>
//       <Card />
//       <Card></Card>
//       <Card />
//       <Card></Card>
//       <Card></Card>

//     </div>
//   );
// };

// import { Zurag } from "@/component/Zurag";

// const style = {
//   body: {
//     width: 1400,
//     height: 2092,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexWrap: "wrap",
//     gap: 20,
//     backgroundColor: "white",
//   },
// };

// const Body = () => {
//   return (
//     <div style={style.body}>
//       <Zurag></Zurag>
//       <Zurag></Zurag>
//       <Zurag></Zurag>
//       <Zurag></Zurag>
//       <Zurag></Zurag>
//       <Zurag></Zurag>
//       <Zurag></Zurag>
//       <Zurag></Zurag>
//       <Zurag></Zurag>
//     </div>
//   );
// };

// export default function Home() {
//   return (
//     <div>
//       <Body />
//     </div>
//   );
// }

// import { TextBox } from "@/component/Text";
// import { ImageBox } from "@/component/Shoes";
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
// import { Zurag } from "@/component/Zurag";
// export default function App() {
//   const data = [
//     { firstName: "George", lastName: "Smith", job: "writer", salary: 50000 },
//     { firstName: "Michael", lastName: "Handler", job: "DJ", salary: 150000 },
//     { firstName: "Larry", lastName: "David", job: "writer", salary: 250000 },
//     { firstName: "Mindy", lastName: "Smith", job: "cook", salary: 120000 },
//   ];
//   return (
//     <div className="App">
//       {data.map((person) => (
//         <div className="card">
//           <Zurag>
//             <p>{person.firstName}</p>
//           </Zurag>
//           <p>{person.lastName}</p>
//           <p>{person.job}</p>
//           <p>{person.salary}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

import { Main } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
