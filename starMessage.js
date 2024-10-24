const { notion } = require('./notionClient');
const databaseId = process.env.NOTION_DATABASE_ID;

// Function to mark or unmark a message as starred
async function starMessage(messageId, starStatus) {
  try {
    // Update the message's "Starred" property to the specified status
    await notion.pages.update({
      page_id: messageId,
      properties: {
        'Starred': {
          checkbox: starStatus,  // true for starred, false for unstarred
        },
      },
    });

    const status = starStatus ? 'starred' : 'unstarred';
    console.log(`Message ${messageId} marked as ${status}!`);
  } catch (error) {
    console.error('Error marking message:', error);
  }
}

module.exports = { starMessage };
