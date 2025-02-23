function calculateDday() {
  // today and target day
  const targetDate = new Date("2025-04-05");
  const today = new Date();

  // diffInTime: millisec 
  const diffInTime = targetDate - today;
  const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

  // Result
  const resultElement = document.getElementById("js-countdown");
  if (diffInDays > 0) {
    resultElement.innerText = "민선과 류의 결혼식까지 앞으로 " + `${diffInDays}` + "일 남았습니다.";
  } else if (diffInDays === 0) {
    resultElement.innerText = "민선과 류의 결혼식날입니다.";
  } else {
    resultElement.innerText = "민선과 류의 결혼식으로부터 " + `${Math.abs(diffInDays)}` + "일 지났습니다.";
  }
}

calculateDday();
