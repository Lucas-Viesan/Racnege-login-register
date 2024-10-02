const validateUser = async (email) => {
  try {
    const result = await fetch(
      `http://localhost:8081/api/users?email=${email}`
    );
    const user = await result.json();
    return user;
  } catch (error) {
    return { error };
  }
};

const onClickLogin = async () => {
  const email = document.getElementById("input-email").value;
  if (email.length < 5 || !email.includes("@")) {
    alert("email inválido");
    return;
  }
  const result = await validateUser(email);
  if (result.error) {
    alert("Falha ao validar e-mail");
    return;
  }

  localStorage.setItem("@AcervoRacnege:userEmail", result.email);
  localStorage.setItem("@AcervoRacnege:userName", result.name);
  localStorage.setItem("@AcervoRacnege:userId", result.id);
};
