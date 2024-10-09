const onLogout = () => {
  localStorage.clear();
  window.open("../../../index.html", "_self");
};

const onLoadUserInfo = () => {
  const email = localStorage.getItem("@AcervoRacnege:userEmail");
  const name = localStorage.getItem("@AcervoRacnege:userName");

  const navbarUserInfo = document.getElementById("navbar-books");
  const navbarUserAvatar = document.getElementById("navbar-user-avatar");
  const navbarUserAvatar2 = document.getElementById("navbar-user-avatar-2");
  const navbarUserNameAvatar2 = document.getElementById(
    "navbar-user-name-avatar-2"
  );

  // add user email
  const emailElement = document.createElement("p");
  const emailText = document.createTextNode(email);
  emailElement.appendChild(emailText);
  navbarUserInfo.appendChild(emailElement);

  // add logout link
  const logoutElement = document.createElement("a");
  logoutElement.onclick = () => onLogout();
  logoutElement.style.cursor = "pointer";
  const logoutText = document.createTextNode("sair");
  logoutElement.appendChild(logoutText);
  navbarUserInfo.appendChild(logoutElement);

  // add user first letter inside avatar
  const nameElement = document.createElement("h3");
  const nameText = document.createTextNode(name.charAt(0));
  nameElement.appendChild(nameText);
  navbarUserAvatar.appendChild(nameElement);

  const nameElement2 = document.createElement("h2");
  const nameText2 = document.createTextNode(name.charAt(0));
  nameElement2.appendChild(nameText2);
  navbarUserAvatar2.appendChild(nameElement2);

  const nameUserElement = document.createElement("h3");
  const nameUserText = document.createTextNode(name);
  nameUserElement.appendChild(nameUserText);
  navbarUserNameAvatar2.appendChild(nameUserElement);
};

window.onload = () => {
  onLoadUserInfo();
};
