(function() {
  var rent = document.getElementById('rent');
  var phoneBill = document.getElementById('phone-bill');
  var internet = document.getElementById('internet');
  var electricity = document.getElementById('electricity');
  var groceries = document.getElementById('groceries');
  var sem6 = document.getElementById('sem6');
  var buttonTotal = document.getElementById('button-bt');
  var total = document.getElementById('total');
  var clear = document.getElementById('clear-bt');
  var error = document.getElementById('error');

  
  buttonTotal.onclick = function() {
    var rentValue = rent.value;
    var phoneBillValue = phoneBill.value;
    var internetValue = internet.value;
    var electricityValue = electricity.value;
    var groceriesValue = groceries.value;
    var sem6Value = sem6.value;

    error.innerHTML = "";

    total.innerHTML = "";

    if (isNaN(rentValue) || rentValue === "") {
      error.innerHTML += "<li> 1st Sem field must contain numeric value</li>";
    }

    if (isNaN(phoneBillValue) || phoneBillValue === "") {
      error.innerHTML += "<li> 2nd Sem Bill field must contain numeric value</li>";
    }

    if (isNaN(internetValue) || internetValue === "") {
      error.innerHTML += "<li> 3rd Sem field must contain numeric value</li>";
    }

    if (isNaN(electricityValue) || electricityValue === "") {
      error.innerHTML += "<li> 4th Sem field must contain numeric value</li>";
    }

    if (isNaN(groceriesValue) || groceriesValue === "") {
      error.innerHTML += "<li>  5th Sem field must contain numeric value</li>";
    }
    if (isNaN(sem6Value) || sem6Value === "") {
      error.innerHTML += "<li>  6th Sem field must contain numeric value</li>";
    }

    if (!isNaN(rentValue) && !isNaN(phoneBillValue) && !isNaN(internetValue) && !isNaN(electricityValue) && !isNaN(groceriesValue) && !isNaN(sem6Value) && rentValue !== "" && phoneBillValue !== "" && internetValue !== "" && electricityValue !== "" && groceriesValue !== "" && sem6Value !== "") {

      var totalExpense = (Number(rentValue)*17.5 + Number(phoneBillValue)*20.5 + Number(internetValue)*22 + Number(electricityValue)*21 + Number(groceriesValue)*22+ Number(sem6Value)*21)/124;
      total.innerHTML = totalExpense.toFixed(3);
    }

  };

  clear.onclick = function() {
    error.innerHTML = "";
    rent.value = "";
    phoneBill.value = "";
    internet.value = "";
    electricity.value = "";
    groceries.value = "";
    sem6.value = "";
    total.value = "";

  };

}());