// your code here
document.getElementById('button').addEventListener('click', function() {
  // Get values from input fields
  const name = document.getElementById('name').value;
  const year = document.getElementById('year').value;
  
  // Construct the URL with query parameters
  const baseUrl = 'https://localhost:8080/';
  const url = new URL(baseUrl);
  url.searchParams.append('name', name);
  url.searchParams.append('year', year);
  
  // Update the h3 element with the new URL
  document.getElementById('url').textContent = url.toString();
});
