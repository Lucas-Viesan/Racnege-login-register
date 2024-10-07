const onCallLogin = async (email, password) => {
  try {
    const data = {
      email,
      password,
    };

    const response = await fetch("http://127.0.0.1:8081/api/users/login", {
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

const onClickLogin = async () => {
  const email = document.getElementById("input-email").value;
  const password = document.getElementById("input-senha").value;

  const result = await onCallLogin(email, password);

  if (result.error) {
    alert("Falha ao cadastrar");
    return;
  }

  localStorage.setItem("@AcervoRacnege:userEmail", result.email);
  localStorage.setItem("@AcervoRacnege:userName", result.name);
  localStorage.setItem("@AcervoRacnege:userId", result.id);
};

window.onload = () => {
  const form = document.getElementById("form-login");
  form.onsubmit = (event) => {
    event.preventDefault();
    onClickLogin();
  };
};
