const virus = document.querySelectorAll(".card.virus");
const arrData = [];

virus.forEach((item) => {
  const img = item.childNodes[1].src;
  const title = item.childNodes[3].childNodes[1].innerText;
  arrData.push({ img, title });
});
arrData.splice(6);
const button = document.querySelector("#basic-addon2");
const renderVirusSearch = () => {
  const inputValue = document.querySelector("#search").value;
  if (inputValue == "") {
    document.querySelector(".form__result").innerHTML = "";
    document.querySelector(".form__result").style.display = "none";
    return;
  }
  const arrNew = arrData.filter((item) => {
    return item.title.toUpperCase().includes(inputValue.toUpperCase());
  });
  const arrHTML = arrNew.map((item) => {
    return `<div class="form__item">
    <img src="${item.img}" alt="" class="form__item--img"></img>
    <h4 class="form__item--name">${item.title}</h4>
    </div>`;
  });
  document.querySelector(".form__result").style.display = "block";
  document.querySelector(".form__result").innerHTML = arrHTML.join("");
};
button.addEventListener("click", renderVirusSearch);

console.log(arrData);
