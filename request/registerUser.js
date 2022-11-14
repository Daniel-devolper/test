export async function RegisterUser(url, data) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(
    "🚀 ~ file: registerUser.js ~ line 10 ~ RegisterUser ~ response",
    response
  );
  return response;
}
