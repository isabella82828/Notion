const { notion } = require('./notionClient');
const databaseId = process.env.NOTION_DATABASE_ID;

// Function to mark a message as read or unread
async function markMessageAsReadOrUnread(messageId, readStatus) {
  try {
    // Update the message's "Read" property to the specified status
    await notion.pages.update({
      page_id: messageId,
      properties: {
        'Read': {
          checkbox: readStatus,  // true for read, false for unread
        },
      },
    });

    const status = readStatus ? 'read' : 'unread';
    console.log(`Message ${messageId} marked as ${status}!`);
  } catch (error) {
    console.error('Error marking message:', error);
  }
}

module.exports = { markMessageAsReadOrUnread };
