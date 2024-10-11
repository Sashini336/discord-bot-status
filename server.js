const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const BOT_ID = '888881437569323009';
const DISCORD_API_URL = `https://discord.com/api/v10/users/${BOT_ID}`;

app.get('/bot-status', async (req, res) => {
  try {
    const response = await axios.get(DISCORD_API_URL);
    res.json({ status: response.data.bot ? 'Online' : 'Offline' });
  } catch (error) {
    console.error('Error fetching bot status:', error);
    res.status(500).json({ status: 'Offline', error: 'Failed to fetch bot status' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
