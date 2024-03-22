function toggleMode() {
  const avatar = document.querySelector(".profile img")
  
  const html = document.querySelector("html")
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    avatar.src = "./assets/avatar-light.jpg"
  } else {
    avatar.src = "./assets/avatar-dark.jpg"
  }
}