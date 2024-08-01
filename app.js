document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const botToken = "6840164026:AAFHJjBBddawGknebJ5NaZDGn92hPFMWaKk";
  const chatId = "5951067245";

  const name = document.getElementById("name").value;
  const middleName = document.getElementById("Mname").value;
  const lastName = document.getElementById("Lname").value;
  const phoneNumber = document.getElementById("PhoneN").value;
  const secondPhoneNumber = document.getElementById("SecondN").value;
  const place = document.getElementById("Place").value;

  const text = `Ism: ${name}\nFamilya: ${lastName}\nSharf: ${middleName}\nTell: ${phoneNumber}\nTell2: ${secondPhoneNumber}\nYashash joy: ${place}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const params = {
    chat_id: chatId,
    text: text,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.ok) {
        alert("Ma'lumot jo'natildi, sizga 24 soat ichida aloqaga chiqamiz.");
        document.getElementById("myForm").reset();
      } else {
        alert("Xatolik yuz berdi, iltimos qaytadan urinib ko'ring.");
      }
    })
    .catch((error) =>
      alert(
        "Xatolik yuz berdi, iltimos qaytadan urinib ko'ring." + error.message
      )
    );
});
