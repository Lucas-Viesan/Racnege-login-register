const onCallRegister = async (name, email, cpf, phone, password) => {
  try {
    const data = {
      email,
      name,
      cpf,
      phone,
      password,
    };

    const response = await fetch("http://127.0.0.1:8081/api/users/register", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const user = await response.json();
    return user;
  } catch (error) {
    return { error };
  }
};

const onRegister = async () => {
  const email = document.getElementById("input-email").value;
  const name = document.getElementById("input-name").value;
  const cpf = document.getElementById("input-cpf").value;
  const phone = document.getElementById("input-phone").value;
  const password = document.getElementById("input-senha").value;

  if (name.length < 3) {
    alert("Nome deve conter mais de 3 caracters");
    return;
  }
  if (email.length < 5 || !email.includes("@")) {
    alert("email inválido");
    return;
  }
  const result = await onCallRegister(name, email, cpf, phone, password);

  if (result.error) {
    alert("Falha ao cadastrar");
    return;
  }

  localStorage.setItem("@AcervoRacnege:userEmail", email);
  localStorage.setItem("@AcervoRacnege:userName", name);
  window.open("../home/index.html", "_self");
};

window.onload = () => {
  const form = document.getElementById("form-register");
  form.onsubmit = (event) => {
    event.preventDefault();
    onRegister();
  };
};
