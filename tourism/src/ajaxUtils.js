function sendRequest(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.send(null);

    req.onreadystatechange = () => {

      if (req.status === 200 && req.readyState === 4) {
        console.log("success")
        resolve(req.responseText);
      }
    }
  })
}

export default sendRequest;
