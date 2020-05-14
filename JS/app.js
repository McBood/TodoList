const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCKECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// show Date

const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerText = today.toLocaleDateString("ru", options);

// Add To do

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const item = `<li class="item">
  <i class="fa ${DONE} co" job="complete" id="${id}"></i>
  <p class="text ${LINE}">${toDo}</p>
  <i class="fas fa fa-trash de" j ob="delete" id="${id}"></i>
  </li>`;

  const DONE = done ? CHECK : UNCKECK;
  const LINE = done ? LINE_THROUGH : "";

  list.insertAdjacentHTML("beforeend", item);
}
