import { users } from "../component/Mockdata";
export const Main = () => {
  const information = users.map((el, i) => (
    <div>
      <div class="box" key="${el.uid}"></div>
    </div>
  ));
};
// const containerEl = document.getElementById("container");
// const cardEls = users.map((el) => `
//   <div class="box" key="${el.uid}">
//     <div>
//       <img src="${el.avatar}" alt="">
//     </div>
//     <div class="information">
//       <h5>${el.first_name} ${el.last_name}</h5>
//       <div class="hi">
//         <p class="emp">${el.employment.title}</p>
//         <p class="empp">${el.gender}</p>
//       </div>
//       <div class="email"><p>${el.email}</p></div>
//     </div>
//   </div>
// `).join('');

// containerEl.innerHTML = cardEls;
// console.log(cardEls);
