
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;
  console.log(allPayments)
  for (let key in allPayments) {
    
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}
console.log(sumPaymentTotal(10));
// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// append delete button and click handler for removing server from allServers and DOM td
function appendDeleteBtn(tr, type) {
  let newTd = document.createElement('td');
  newTd.className = 'deleteBtn';
  newTd.innerText = 'X';

  newTd.addEventListener('click', removeElement);

  tr.append(newTd);
}

function removeElement(evt) {
  let element = evt.target.closest('tr');

  delete allServers[element.id];

  ele.parentNode.removeChild(element);
  updateServerTable();
}
