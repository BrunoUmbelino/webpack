import "../css/style.scss";
import img from "../assets/buildings.png";

const textComponent = () => {
  const elH1 = document.createElement("h1");
  elH1.innerHTML = "Boa noite.";
  elH1.classList.add("title");
  return elH1;
};

const imgContainer = () => {
  const elImg = new Image(300, 150);
  elImg.src = img;
  elImg.style = "border-radius : 8px";
  return elImg;
};

document.body.appendChild(textComponent());
document.body.appendChild(imgContainer());
