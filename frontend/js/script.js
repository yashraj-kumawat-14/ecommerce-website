fetch('http://localhost:5000/api/products')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the products to check if it works
  });
