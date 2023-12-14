fetch("http://localhost:4730/books")
  .then((res) => res.json())
  .then((data) => {
    console.log(JSON.stringify(data, null, 1));
  });
