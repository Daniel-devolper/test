export async function LoginUser(url, email, password) {
  let credentials = btoa(`${email}:${password}`);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + credentials,
    },
  });

  console.log(
    "🚀 ~ file: loginUser.js ~ line 48 ~ LoginUser ~ response",
    response
  );
  return response.text();
}
