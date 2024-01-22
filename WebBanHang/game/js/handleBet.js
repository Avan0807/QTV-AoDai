$(document).ready(function () {
  let currentMoneyDOM = $("#money");
  let currentMoney = Number($("#money")[0].getAttribute("value"));
  console.log(currentMoney);
  $("#sub").click(function () {
    if (Number($("#valueMoney").val()) > 10000) {
      $("#valueMoney").val(Number($("#valueMoney").val()) - 10000);
    }
  });
  $("#add").click(function () {
    $("#valueMoney").val(Number($("#valueMoney").val()) + 10000);
  });

  const iconBauCuas = $(".imgwapper").toArray();
  iconBauCuas.forEach((element) => {
    $(element).click(() => {
      handleClick(element);
    });
  });

  const handleClick = (element) => {
    const valueBet = Number($(".moneybet").val());
    let currentMoney = Number($("#money")[0].getAttribute("value"));
    if (currentMoney >= valueBet) {
      currentMoney -= valueBet;
      currentMoneyDOM.html(currentMoney);
      Number($("#money")[0].setAttribute("value", currentMoney));
      let oldPrice = 0;
      console.log($(element).find("input").length == 0);
      if ($(element).find("input").length == 0) {
        $(element).html(
          $(element).html() +
            `<input type="text" class="input_price_bet text-center" value="${valueBet}">`
        );
      } else {
        oldPrice = $(element).find("input")[0].getAttribute("value");
        const newPrice = Number(oldPrice) + Number(valueBet);
        $(element).find("input")[0].setAttribute("value", newPrice);
      }
    } else {
      alert("Con đỗ nghèo, you không đủ tiền");
    }
  };
});
