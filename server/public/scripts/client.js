$(document).ready(function() {
  var firstNum;
  var secondNum;
  var type;
  var calcInfo = {};

//Send input values to server for calculation, then retrieve answer.
  $('.operator').on('click', function() {
    event.preventDefault();
    firstNum = getData($('#firstNum'));
    secondNum = getData($('#secondNum'));
    type = $(this).data('operator');
    calcInfo.x = firstNum.firstInput;
    calcInfo.y = secondNum.secondInput;
    calcInfo.type = type;
    postAnswer(calcInfo);
  });

//Reset form field for next calculation.
  $('.clear-btn').on('click', function() {
    $('.form-input-container').reset();
  });

});

function getData(inputID) {
  var userInputs = {};
  var inputs = $(inputID).serializeArray();

  for (var i = 0; i < inputs.length; i++) {
    var record = inputs[i];
    userInputs[record.name] = record.value;
  }
  return userInputs;
}

function postAnswer(calcInfo) {
  $.ajax({
    type: 'POST',
    url: '/math',
    data: calcInfo,
    success: function(answer) {
      $('.equals-to-container').text(answer);
    }
  });
}
