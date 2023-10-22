const submitBtn = document.querySelector("#submit-btn");
const noHp = document.querySelector("#no-hp");
const kataSandi = document.querySelector("#kata-sandi");

noHp.oninput = () => {
  if (!/^[0-9]$/i.test(noHp.value[noHp.value.length - 1])) {
    noHp.value = noHp.value.substr(0, noHp.value.length - 1);
  }
};

submitBtn.onclick = () => {
  const inputs = document.querySelectorAll("input");
  const selects = document.querySelectorAll("select");
  const allInput = [...inputs, ...selects];

  allInput.forEach((d) => {
    const warnText = document.querySelector(`#${d.id}-warn`);
    if (d.required && !d.value) {
      isValid = false;
      d.style.borderBottom = "2px solid #E53E3E";
      if (warnText) {
        warnText.textContent = "Harap isi input ini!";
        warnText.style.color = "#E53E3E";
      }
    } else {
      d.style.borderBottom = "2px solid #04AA6D";
      if (warnText) {
        warnText.textContent = "Terverifikasi!";
        warnText.style.color = "#04AA6D";
      }
    }

    if (d.id == "re-kata-sandi" && d.value && d.value != kataSandi.value) {
      isValid = false;
      d.style.borderBottom = "2px solid #E53E3E";
      if (warnText) {
        warnText.textContent = "Kata sandi harus sama!";
        warnText.style.color = "#E53E3E";
      }
    }
  });
};
