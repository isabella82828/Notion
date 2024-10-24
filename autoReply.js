const { notion } = require('./notionClient');
const databaseId = process.env.NOTION_DATABASE_ID;

// Store auto-reply messages in memory (in a real-world app, you'd store these in the database)
const autoReplies = {};

// Function to set an auto-reply for a user
function setAutoReply(user, message) {
  autoReplies[user] = message;
  console.log(`Auto-reply for ${user} set successfully!`);
}

// Function to check if an auto-reply exists for the recipient and send it
async function sendAutoReply(sender, recipient) {
  if (autoReplies[recipient]) {
    // Send the auto-reply message
    const message = autoReplies[recipient];
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Sender': {
          rich_text: [
            {
              text: { content: recipient },
            },
          ],
        },
        'Recipient': {
          rich_text: [
            {
              text: { content: sender },
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

    console.log(`Auto-reply sent to ${sender}: "${message}"`);
  }
}

module.exports = { setAutoReply, sendAutoReply };
