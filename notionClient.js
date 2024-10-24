const { Client } = require('@notionhq/client');
require('dotenv').config();  // Load environment variables from .env

// Initialize the Notion client with the API key from the .env file
const notion = new Client({ auth: process.env.NOTION_API_KEY });

module.exports = { notion };
