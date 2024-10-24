const { notion } = require('./notionClient');

async function archiveMessage(pageId) {
  try {
    await notion.pages.update({
      page_id: pageId,
      properties: {
        'Archived': {
          checkbox: true,  // Set the Archived property to true
        },
      },
    });
    console.log('Message archived successfully!');
  } catch (error) {
    console.error('Error archiving message:', error);
  }
}

module.exports = { archiveMessage };
