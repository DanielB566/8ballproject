function shakeMagic8Ball() {
  const question = prompt("Ask the Magic 8-Ball a question");
  if (question === null) {
    document.getElementById("response-text").innerText =
      "Please ask a question!";
    document.getElementById("response-text").classList = "display text-danger ";
    document.getElementById("reponse-img").src = "imgs/noo.png"; //fix later//
  }

  if (!question.trim()) {
    alert("Please enter a valid question");
    return;
  }

  const randomNumber = Math.floor(Math.random() * 8);
  let answer, image, color;

  switch (randomNumber) {
    case 0:
      answer = "Yes";
      document.getElementById("reponse-img").src = "imgs/yess.png"; //fix later//
      image = "imgs/yess.png"; //Change this;
      color = "text-success";
      break;
    case 1:
      answer = "No";
      document.getElementById("reponse-img").src = "imgs/noo.png"; //fix later//
      image = "no-image.jpg"; //Change this;
      color = "text-danger";
      break;
    case 2:
      answer = "It is certain";
      document.getElementById("reponse-img").src = "imgs/yess.png"; //fix later//
      image = "It is certain-image.jpg"; //Change this;
      color = "text-success";
      break;
    case 3:
      answer = "It is decidely so";
      document.getElementById("reponse-img").src = "imgs/yess.png"; //fix later//
      image = "It is decidely so-image.jpg"; //Change this;
      color = "text-success";
      break;
    case 4:
    answer = "cannot predict now";
    document.getElementById("reponse-img").src = "imgs/puzzled.png"; //fix later//
     image = "cannot predict now-image.jpg"; //Change this;
     color = "text-muted";
     break;
    case 5:
    answer = "Do not count on it";
    document.getElementById("reponse-img").src = "imgs/noo.png"; //fix later//
    image = "Do not count on it-image.jpg"; //Change this;
    color = "text-danger";
    break;
    case 6:
    answer = "My sources say no";
    document.getElementById("reponse-img").src = "imgs/noo.png"; //fix later//
    image = "My sources say no-image.jpg"; //Change this;
    color = "text-danger";
    break;
    case 7:
    answer = "Signs point to yes";
    document.getElementById("reponse-img").src = "imgs/yess.png"; //fix later//
    image = "Signs point to yes-image.jpg"; //Change this;
    color = "text-success";
    break;
  }

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;
document.getElementById('response-image').src = `images/${image}`

}
