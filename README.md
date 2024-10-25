# Notion Mail CLI 💌

Welcome to Notion Mail CLI, a command-line interface (CLI) tool that allows you to send, read, search, and manage messages via the Notion API!

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
   git clone https://github.com/username/Notion-Mail-CLI.git
   cd Notion-Mail-CLI
   
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
  
4. Testing suite
   ```javascript
   npm test 
   ```

## Product and Technical Choices 🤔

- **Notion API for Data Storage**: Notion offers a structured database system that is easy to interact with using API calls, making it perfect for storing, reading, and managing messages.

- **Command-Line Interface (CLI)**: A CLI interface was chosen for simplicity and accessibility. It allows developers to interact with the application without the need for a GUI, making the tool lightweight and easy to run across different platforms.

- **Node.js for Backend Logic**: Node.js was selected for its non-blocking, event-driven architecture, which is ideal for building applications that require asynchronous operations, such as querying an API like Notion's.

- **Jest for Testing**: Jest was used to ensure correctness and reliability of core features, like sending and reading messages. It is a widely adopted testing framework in the JavaScript ecosystem, making it a natural fit for this project.

- **Auto-Reply Feature**: The auto-reply functionality was added to enhance user experience, especially for use cases where users might be unavailable to respond to messages manually.

- **Environment Variables with dotenv**: The **dotenv** library was used to manage sensitive information such as the Notion API key, ensuring that these details are not hardcoded into the project. This approach also allows easy modification of environment variables for different setups (e.g., development, production).

- **Message Metadata**: Properties like "Archived," "Starred," and "Read/Unread" were added to give users more control over their messages. These features improve usability, allowing users to organize their inbox more efficiently.

- **Security Considerations**: While basic, the implementation ensures that all API interactions are done securely through environment variables, reducing the risk of exposing sensitive data.


##  Future Improvements 🎨
Here are some potential features and enhancements that could be added to the Notion Mail CLI:

- 📂 Message Folders: Implement folders to help users organize their messages by category (e.g., Personal, Work, Spam).

- 👥 Multiple Recipients: Enable sending messages to multiple recipients simultaneously, similar to email CC/BCC functionality.

- 🔒 Message Encryption: Add encryption capabilities to ensure message content is securely transmitted and stored.

- 🎨 Customizable Themes: Provide users with different themes or colors for the CLI interface to personalize their experience.

- 🏷️ Message Labels/Tags: Implement labels or tags for messages, allowing users to categorize and search messages by custom tags.

- 🔗 Integration with Other APIs: Extend the functionality by integrating with other APIs like Slack, Gmail, or Trello, allowing users to manage messages across different platforms.



