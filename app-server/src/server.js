import "dotenv/config";
import app from "./app.js";

const PORT = process.env.APP_PORT || 3000;

async function startServer() {
  try {
    const app_server = app.listen(PORT, () => {
      console.log("Server is running on Port: ", PORT);
    });
  } catch (err) {
    console.error("Error in starting the server: ", err);
  }
}

startServer();
