function calculate() {
  let p = document.getElementById("input1").value;
  let year = document.getElementById("input2").value;
  let percent = document.getElementById("input3").value;

  let n = year * 12;

  let u = percent / 100;
  let i = u / 12;
  console.log(p);
  console.log(n);
  console.log(u);
  console.log(i);
  let m = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  console.log(m);
  let a = p * n;
  document.getElementById("amountexpected").innerHTML = m;
  document.getElementById("amountinvested").innerHTML = a;
  document.getElementById("profit").innerHTML = m - a;
}
