export function register(email, name, password) {
  fetch("http://10.0.0.231/api/register.php", {
    methodl: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, name, password }),
  });
}
