export async function ProfileUserData(url) {
  const bearer = sessionStorage.getItem("bearer");

  const response = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: bearer,
    },
  })
    .then((res) => {
      //console.log("MYself ",data.body)
      return res.json();
    })
    .then((data) => {
      // console.log('MYSELF',data)
      return data;
    });

  return response;
}
