document.getElementById("sizeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const gender = document.getElementById("gender").value;
  const unit = document.getElementById("unit").value;
  let chest = parseFloat(document.getElementById("chest").value);
  let waist = parseFloat(document.getElementById("waist").value);
  let hips = parseFloat(document.getElementById("hips").value);

  // Convert inches to cm if needed
  if (unit === "in") {
    chest *= 2.54;
    waist *= 2.54;
    hips *= 2.54;
  }

  const zaraSize = getZaraSize(gender, chest, waist, hips);
  const hmSize = getHMSize(gender, chest, waist, hips);

  const sizeResults = document.getElementById("sizeResults");
  sizeResults.innerHTML = `
    <li><strong>Zara (${gender}):</strong> ${zaraSize}</li>
    <li><strong>H&M (${gender}):</strong> ${hmSize}</li>
  `;

  document.getElementById("result").classList.remove("hidden");
});

function getZaraSize(gender, chest, waist, hips) {
  if (gender === "men") {
    if (chest <= 88) return "XS";
    if (chest <= 96) return "S";
    if (chest <= 104) return "M";
    if (chest <= 112) return "L";
    return "XL+";
  } else {
    if (chest <= 82 && waist <= 62) return "XS";
    if (chest <= 90 && waist <= 70) return "S";
    if (chest <= 98 && waist <= 78) return "M";
    if (chest <= 106 && waist <= 86) return "L";
    return "XL+";
  }
}

function getHMSize(gender, chest, waist, hips) {
  if (gender === "men") {
    if (chest <= 90) return "XS";
    if (chest <= 98) return "S";
    if (chest <= 106) return "M";
    if (chest <= 114) return "L";
    return "XL+";
  } else {
    if (hips <= 88) return "XS";
    if (hips <= 96) return "S";
    if (hips <= 104) return "M";
    if (hips <= 112) return "L";
    return "XL+";
  }
}
