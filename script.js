const form = document.getElementById("msg-form");
const msgList = document.getElementById("msg-list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const res = await fetch("http://localhost:5000/add-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, message })
  });

  const data = await res.json();

  if (data.message) {
    const div = document.createElement("div");
    div.classList.add("message");
    div.innerHTML = `<b>${name}</b>: ${message}`;

    msgList.prepend(div); // NEW MESSAGE ON TOP

    form.reset();
  }
});