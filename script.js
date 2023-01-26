const html = document.querySelector("#html");
const css = document.querySelector("#css");
const js = document.querySelector("#js");
const styles = document.querySelector("#styles");
const result = document.querySelector("#displayResult");
const btn = document.querySelector("#run");
const scripts = document.querySelector("#scripts");
const loadingGif = document.querySelector(".loadingGif");
const charsLeft = document.querySelector(".text-end");
const maxChars = html.getAttribute("maxlength");
const progressBar = document.getElementById("progress-bar");
const boldBtn = document.querySelector(".boldBtn");
const italicBtn = document.querySelector(".italicBtn");

html.addEventListener("keyup", (e) => {
  result.innerHTML = html.value;
  const currentChars = html.value.length;
  const percent = (currentChars / maxChars) * 100;
  progressBar.style.width = `${percent}%`;
  if (currentChars > maxChars) {
    html.value = html.value.substring(0, maxChars);
  }
  charsLeft.innerHTML = maxChars - currentChars;
  switch (true) {
    case percent >= 60 && percent < 80:
      progressBar.style.backgroundColor = "orange";
      break;

    case percent >= 80:
      progressBar.style.backgroundColor = "red";
      break;

    case percent >= 0.5 && percent < 60:
      progressBar.style.backgroundColor = "green";
      break;
    default:
      progressBar.style.backgroundColor = "white";
      break;
  }
});

css.addEventListener("keyup", (e) => {
  styles.innerText = css.value;
});

js.addEventListener("keyup", (e) => {
  scripts.textContent = js.value;
});

btn.addEventListener("click", (e) => {
  let func = new Function(scripts.innerText);
  func();
});

html.addEventListener("focus", (e) => {
  const img = document.createElement("img");
  img.src = "Infinity-2.4s-34px.gif";
  loadingGif.appendChild(img);
});

html.addEventListener("blur", (e) => {
  const img = document.querySelector("img");
  loadingGif.removeChild(img);
});

boldBtn.addEventListener("click", (e) => {
  if (html.selectionStart !== html.selectionEnd) {
    html.setRangeText(
      "<b>" +
        html.value.substring(html.selectionStart, html.selectionEnd) +
        "</b>",
      html.selectionStart,
      html.selectionEnd
    );
  }
});

italicBtn.addEventListener("click", (e) => {
  if (html.selectionStart !== html.selectionEnd) {
    html.setRangeText(
      "<i>" +
        html.value.substring(html.selectionStart, html.selectionEnd) +
        "</i>",
      html.selectionStart,
      html.selectionEnd
    );
  }
});
