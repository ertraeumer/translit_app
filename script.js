// создаем блоки для всех элементов
const hed = document.createElement('div');
const header = document.createElement('div');
const textInpDiv = document.createElement('div');
const btnDiv = document.createElement('div');
const dict = document.createElement('div');
const dictOrDiv = document.createElement('div');
const dictResDiv = document.createElement('div');

// группируем
header.appendChild(textInpDiv);
header.appendChild(btnDiv);

dict.appendChild(dictOrDiv);
dict.appendChild(dictResDiv);

hed.appendChild(header);

// добавляем на страницу
const bd = document.querySelector('body');

bd.appendChild(hed);
bd.appendChild(dict);

// создаем элементы блока ввода и добавляем классы
const textInp = document.createElement('input');
const btn = document.createElement('button');

textInp.classList.add('topper');
btn.classList.add('topper');
header.classList.add('hdd');

// добавляем элементы на страницу
header.appendChild(textInp);
header.appendChild(btn);

// подпись для кнопки
btn.innerText = 'Добавить';

// прописываем стили для блока ввода
hed.style.display = 'flex';
hed.style.justifyContent = 'center';
hed.style.width = '100%';

header.style.cssText = `
  border: 1px solid crimson;
  background-color: black;
  border-radius: 5px;
  width: 20%;
  display: flex;
  margin-bottom: 1%;
`;

const topper = document.querySelectorAll('.topper');
for (let i = 0; i < topper.length; i += 1) {
  topper[i].style.cssText = `
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 600;
    margin: 5%;
    font-size: 0.8em;
  `;
}

textInp.style.width = '50%';
btn.style.width = '30%';

// задаем стили для блоков словаря
dict.style.cssText = `
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

dict.classList.add('main');
dictOrDiv.classList.add('dict');
dictResDiv.classList.add('dict');

const dicts = document.querySelectorAll('.dict');

for (let i = 0; i < dicts.length; i += 1) {
  dicts[i].style.cssText = `
    border: 1px solid crimson;
    min-height: 400px;
    background-color: black;
    color: red;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    width: 30%;
  `;
}

// стили для body
bd.style.minHeight = '100vh';
bd.style.display = 'flex';
bd.style.flexWrap = 'wrap';
bd.style.alignContent = 'center';

// вывод в консоль текста с нажатия кнопки, выводы в блоках словаря + тайтл
btn.addEventListener('click', () => {
  console.log(textInp.value);
  const crt = document.createElement('div');
  if (textInp.value.length <= 7) {
    crt.innerText = `${textInp.value}`;
  } else {
    crt.innerText = `${textInp.value.slice(0, 7)}...`;
  }
  dicts[0].appendChild(crt);
  crt.style.textAlign = 'center';
  crt.setAttribute('title', `${textInp.value}`);

  const cret = document.createElement('div');
  const int = translit(textInp.value);
  if (int.length <= 7) {
    cret.innerText = int;
  } else {
    cret.innerText = `${int.slice(0, 7)}...`;
  }
  dicts[1].appendChild(cret);
  cret.style.textAlign = 'center';
  cret.setAttribute('title', `${int}`);

  textInp.value = '';
});

// пишем функцию транслита
function translit(str) {
  let stri = '';
  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case 'а':
        stri += 'a';
        break;
      case 'б':
        stri += 'b';
        break;
      case 'в':
        stri += 'v';
        break;
      case 'г':
        stri += 'g';
        break;
      case 'д':
        stri += 'd';
        break;
      case 'е':
        stri += 'e';
        break;
      case 'ё':
        stri += 'yo';
        break;
      case 'ж':
        stri += 'zh';
        break;
      case 'з':
        stri += 'z';
        break;
      case 'и':
        stri += 'i';
        break;
      case 'й':
        stri += 'y';
        break;
      case 'к':
        stri += 'k';
        break;
      case 'л':
        stri += 'l';
        break;
      case 'м':
        stri += 'm';
        break;
      case 'н':
        stri += 'n';
        break;
      case 'о':
        stri += 'o';
        break;
      case 'п':
        stri += 'p';
        break;
      case 'р':
        stri += 'r';
        break;
      case 'с':
        stri += 's';
        break;
      case 'т':
        stri += 't';
        break;
      case 'у':
        stri += 'u';
        break;
      case 'ф':
        stri += 'f';
        break;
      case 'х':
        stri += 'h';
        break;
      case 'ц':
        stri += 'c';
        break;
      case 'ч':
        stri += 'ch';
        break;
      case 'ш':
        stri += 'sh';
        break;
      case 'щ':
        stri += 'shch';
        break;
      case 'ъ':
        stri += '`';
        break;
      case 'ы':
        stri += 'i';
        break;
      case 'ь':
        stri += '`';
        break;
      case 'э':
        stri += 'e';
        break;
      case 'ю':
        stri += 'yu';
        break;
      case 'я':
        stri += 'ya';
        break;
      case 'А':
        stri += 'A';
        break;
      case 'Б':
        stri += 'B';
        break;
      case 'В':
        stri += 'V';
        break;
      case 'Г':
        stri += 'G';
        break;
      case 'Д':
        stri += 'D';
        break;
      case 'Е':
        stri += 'E';
        break;
      case 'Ё':
        stri += 'Yo';
        break;
      case 'Ж':
        stri += 'Zh';
        break;
      case 'З':
        stri += 'z';
        break;
      case 'И':
        stri += 'I';
        break;
      case 'Й':
        stri += 'Y';
        break;
      case 'К':
        stri += 'K';
        break;
      case 'Л':
        stri += 'L';
        break;
      case 'М':
        stri += 'M';
        break;
      case 'Н':
        stri += 'N';
        break;
      case 'О':
        stri += 'O';
        break;
      case 'П':
        stri += 'P';
        break;
      case 'Р':
        stri += 'R';
        break;
      case 'С':
        stri += 'S';
        break;
      case 'Т':
        stri += 'T';
        break;
      case 'У':
        stri += 'U';
        break;
      case 'Ф':
        stri += 'F';
        break;
      case 'Х':
        stri += 'H';
        break;
      case 'Ц':
        stri += 'C';
        break;
      case 'Ч':
        stri += 'Ch';
        break;
      case 'Ш':
        stri += 'Sh';
        break;
      case 'Щ':
        stri += 'Shch';
        break;
      case 'Ъ':
        stri += '`';
        break;
      case 'Ы':
        stri += 'I';
        break;
      case 'Ь':
        stri += '`';
        break;
      case 'Э':
        stri += 'E';
        break;
      case 'Ю':
        stri += 'Yu';
        break;
      case 'Я':
        stri += 'Ya';
        break;
      default:
        stri += str[i];
    }
  }
  return stri;
}
