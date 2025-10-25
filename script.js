document.getElementById("calculate").addEventListener("click", () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(cell => {
    const value = parseFloat(cell.textContent.trim());
    if (!isNaN(value)) total += value;
  });

  const ans = document.getElementById("ans");
  ans.textContent = total;
});
