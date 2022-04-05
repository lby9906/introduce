// ABC.onXXX
//객체.on이벤트속성 = function () {}
// ABC가 XXX되었을때 = 얘를 실행해라
window.onload = function () {
    b1.onclick = function () {
      name = prompt("이름을 입력하세요.");
      document.getElementsByClassName("name")[0].innerHTML = "Name : " + name;
      // document.getElementById;
      // document.getElementsByClassName;
      // document.getElementsByTagName;
      // document.getElementsByName;
    };
    b2.onclick = function () {
      number = prompt("번호를 입력하세요.");
      document.getElementsByClassName("number")[0].innerHTML =
        "Number : " + number;
    };
    b3.onclick = function () {
      age = prompt("나이를 입력하세요.");
      document.getElementsByClassName("age")[0].innerHTML = "Age : " + age;
    };
    b4.onclick = function () {
      addr = prompt("주소를 입력하세요.");
      document.getElementsByClassName("addr")[0].innerHTML =
        "Address : " + addr;
    };
    b5.onclick = function () {
      mbti = prompt("mbti를 입력하세요.");
      document.getElementsByClassName("mbti")[0].innerHTML = "mbti : " + mbti;
    };
  };