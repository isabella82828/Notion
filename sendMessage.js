const { notion } = require('./notionClient');
const { sendAutoReply } = require('./autoReply');  // Import the auto-reply function
const databaseId = process.env.NOTION_DATABASE_ID;

async function sendMessage(sender, recipient, message) {
  try {
    // Create the message in Notion
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Sender': {
          rich_text: [
            {
              text: { content: sender },
            },
          ],
        },
        'Recipient': {
          rich_text: [
            {
              text: { content: recipient },
            },
          ],
        },
        'Message': {
          title: [
            {
              text: { content: message },
            },
          ],
        },
      },
    });

    console.log('Message sent successfully!');

    // Check if the recipient has an auto-reply and send it back to the sender
    await sendAutoReply(sender, recipient);

  } catch (error) {
    console.error('Error sending message:', error);
  }
}

module.exports = { sendMessage };
