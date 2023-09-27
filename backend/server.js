const express = require('express');
const app = express();

//remember to add thos to an env file so we can decentrilize the settings
const port = 4000;

// Define routes and middleware here
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
