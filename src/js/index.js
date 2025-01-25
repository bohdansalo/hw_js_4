// const text = "tex";
// const noneText = "vix";

// if (text && noneText) {
//   console.log("Обидва поля заповнені");
// } else {
//   console.log("Не всі поля заповнені");
// }
// ========== 2

// const xNumber = 10;
// const yNumber = 5;

// const sum = xNumber + yNumber;

// if (sum >= 10) {
//   console.log("Сума менша або дорівнює 10");
// } else {
//   console.log("Сума більша за 10");
// }

// // ========= 3
// const string = "JavaScript";

// if (string.toUpperCase() === "JAVASCRIPT") {
//   console.log("Текст містить слово JavaScript");
// } else {
//   console.log("Текст не містить слово JavaScript");
// }
// // ========= 4
// const num = 7;

// if (num >= 10 && num <= 20) {
//   console.log("Число входить в діапазон від 10 до 20");
// } else {
//   console.log("Число не входить в діапазон від 10 до 20");
// }

// // ========= 5
const userName = "oktograma";
const userEmail = "oktograma@gmail.com";
const userPassword = "oktograma112";

if (
  userName.length >= 3 &&
  userEmail.includes("@") &&
  userPassword.length >= 6
) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка Ви ввели не всі данні");
}
