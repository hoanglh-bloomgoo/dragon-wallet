function handleClickBoatLevelUp() {
  var modal = document.getElementById("bottom-sheet-boat-level-up");

  modal.style.setProperty("--39d72767", "361px");
  modal.style.visibility = "visible";
}

function handleClickObjLevelUp() {
  var modal = document.getElementById("bottom-sheet-obj-level-up");

  modal.style.setProperty("--39d72767", "361px");
  modal.style.visibility = "visible";
}

function handleClickSeafood() {
  var modal = document.getElementById("bottom-sheet-sea-food");

  modal.style.setProperty("--39d72767", "361px");
  modal.style.visibility = "visible";
}

function handleCancelBoatLevelUp() {
  var modalBoat = document.getElementById("bottom-sheet-boat-level-up");

  modalBoat.style.setProperty("--39d72767", "0px");
  modalBoat.style.visibility = "hidden";
}

function handleCancelObjLevelUp() {
  var modal = document.getElementById("bottom-sheet-obj-level-up");

  modal.style.setProperty("--39d72767", "0px");
  modal.style.visibility = "hidden";
}

function handleCancelSeafood() {
  var modal = document.getElementById("bottom-sheet-sea-food");

  modal.style.setProperty("--39d72767", "0px");
  modal.style.visibility = "hidden";
}

function handleSubmitBoatLevelUp() {
  const btn = document.querySelectorAll(".btn-upgrade[data-v-ab7dfc4a]")[0];
  if (btn) {
    btn.setAttribute("data-is-loading", "true");
    // TODO: Call api
    setTimeout(() => {
      btn.setAttribute("data-is-loading", "false");
    }, 2000);
  }
}

function handleSubmitObjLevelUp() {
  const btn = document.querySelectorAll(".btn-upgrade[data-v-ab7dfc4a]")[1];
  if (btn) {
    btn.setAttribute("data-is-loading", "true");
    // TODO: Call api
    setTimeout(() => {
      btn.setAttribute("data-is-loading", "false");
    }, 2000);
  }
}

function handleSubmitSeafood() {
  const btn = document.querySelectorAll(".btn-upgrade[data-v-ab7dfc4a]")[2];
  if (btn) {
    btn.setAttribute("data-is-loading", "true");
    // TODO: Call api
    setTimeout(() => {
      btn.setAttribute("data-is-loading", "false");
    }, 2000);
  }
}

function handleSubmitClaimNow() {
  const btn = document.querySelector(".btn-claim[data-v-531ceb9b]");
  if (btn) {
    btn.setAttribute("data-is-loading", "true");
    // TODO: Call api
    setTimeout(() => {
      btn.setAttribute("data-is-loading", "false");
    }, 2000);
  }
}

dragElement(document.getElementById("bottom-sheet-boat-level-up"));
function dragElement(elmnt) {
  var height = 0;
  var newHeight = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    var elmContent = document.getElementsByClassName(
      "bottom-sheet__content"
    )[0];

    if (elmContent.contains(e.target)) {
      e.preventDefault();
      height = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  }

  function elementDrag(e) {
    e.preventDefault();
    newHeight = e.clientY;
    var elmContent = document.getElementsByClassName(
      "bottom-sheet__content"
    )[0];
    if (height - newHeight <= 0) {
      elmContent.style.position = "absolute";
      elmContent.style.bottom = height - newHeight + "px";
    }
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    if (height - newHeight < 0) {
      var modalBoat = document.getElementById("bottom-sheet-boat-level-up");

      modalBoat.style.setProperty("--39d72767", "0px");
      modalBoat.style.visibility = "hidden";
    }
  }
}

dragElement(document.getElementById("bottom-sheet-obj-level-up"));
function dragElement(elmnt) {
  var height = 0;
  var newHeight = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    var elmContent = document.getElementsByClassName(
      "bottom-sheet__content"
    )[1];

    if (elmContent.contains(e.target)) {
      e.preventDefault();
      height = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  }

  function elementDrag(e) {
    e.preventDefault();
    newHeight = e.clientY;
    var elmContent = document.getElementsByClassName(
      "bottom-sheet__content"
    )[1];
    if (height - newHeight <= 0) {
      elmContent.style.position = "absolute";
      elmContent.style.bottom = height - newHeight + "px";
    }
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    if (height - newHeight < 0) {
      var modalBoat = document.getElementById("bottom-sheet-obj-level-up");

      modalBoat.style.setProperty("--39d72767", "0px");
      modalBoat.style.visibility = "hidden";
    }
  }
}

dragElement(document.getElementById("bottom-sheet-sea-food"));
function dragElement(elmnt) {
  var height = 0;
  var newHeight = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    var elmContent = document.getElementsByClassName(
      "bottom-sheet__content"
    )[2];

    if (elmContent.contains(e.target)) {
      e.preventDefault();
      height = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  }

  function elementDrag(e) {
    e.preventDefault();
    newHeight = e.clientY;
    var elmContent = document.getElementsByClassName(
      "bottom-sheet__content"
    )[2];
    if (height - newHeight <= 0) {
      elmContent.style.position = "absolute";
      elmContent.style.bottom = height - newHeight + "px";
    }
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    if (height - newHeight < 0) {
      var modalBoat = document.getElementById("bottom-sheet-sea-food");

      modalBoat.style.setProperty("--39d72767", "0px");
      modalBoat.style.visibility = "hidden";
    }
  }
}

window.onclick = function (event) {
  const loading = document.querySelector(
    ".btn-upgrade[data-v-ab7dfc4a][data-is-loading=true]"
  );
  if (!loading) {
    var overlayBoat = document.getElementsByClassName(
      "bottom-sheet__overlay"
    )[0];

    if (event.target == overlayBoat) {
      handleCancelBoatLevelUp();
    }

    var overlayObj = document.getElementsByClassName(
      "bottom-sheet__overlay"
    )[1];

    if (event.target == overlayObj) {
      handleCancelObjLevelUp();
    }

    var overlaySeafood = document.getElementsByClassName(
      "bottom-sheet__overlay"
    )[2];

    if (event.target == overlaySeafood) {
      handleCancelSeafood();
    }
  }
};
