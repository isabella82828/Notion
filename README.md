# Notion Mail CLI 💌

Welcome to Notion Mail CLI, a command-line interface (CLI) tool that allows you to send, read, search, and manage messages via the Notion API. 

Notion Mail CLI is a simple and fun Command Line Interface (CLI) tool, powered by the magical ✨ Notion API ✨. It lets you send, read, search, and manage messages, all from the comfort of your terminal 📨💌

Perfect for developers who love keeping things organized but with a dash of cool tech 😎

## Features 💡

- 📝 **Send Messages**: Send messages to a specific recipient.
- 📖 **Read Messages**: Check your inbox and read received messages.
- 🔍 **Search Messages**: Search messages using a keyword.
- 🤖 **Auto-Reply**: Set up an automatic reply for incoming messages when you’re away.
- ✅ **Mark as Read/Unread**: Mark messages as read or unread for better organization.
- ⭐️ **Star Messages**: Highlight important messages by starring them.
- 📦 **Archive Messages**: Archive old messages to keep your inbox clean.
- 🚮 **Delete Messages**: Permanently delete unwanted messages.
- 👋 **Exit**: Quit the application.

## Built With 🛠️

- **Node.js** - JavaScript runtime used for building the CLI tool.
- **Notion API** - Interface used for interacting with the Notion database.
- **dotenv** - Module to securely manage API keys and environment variables.
- **Jest** - JavaScript testing framework used for testing the application.

## Getting Started 🚀

Follow these steps to set up the **Notion Mail CLI** on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) installed on your system.
- A free Notion account with API access ([Get started with Notion API](https://developers.notion.com/docs/getting-started)).

### Installation

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/username/Notion-Take-Home-Assessment.git
   cd Notion-Take-Home-Assessment
   
2. To start the Notion Mail CLI, run:
   ```javascript
   node index.js 
   ```
   
3. Set up your** Notion database:**
   - Log in to your [Notion account](https://www.notion.so/).
   - Create a new **Table** database with the following properties:
     - `Message` (Title)
     - `Sender` (Text)
     - `Recipient` (Text)
     - `Timestamp` (Date)
     - `Archived` (Checkbox)
     - `Read` (Checkox)
     - `Starred` (Checkbox)
   - Connect your Notion database to the Notion API by following [this guide](https://developers.notion.com/docs/create-a-notion-integration#getting-started).



