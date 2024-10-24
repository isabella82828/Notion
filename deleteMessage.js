const { notion } = require('./notionClient');

async function deleteMessage(pageId) {
  try {
    await notion.pages.update({
      page_id: pageId,
      archived: true,  // Archiving the page effectively "deletes" it
    });
    console.log('Message deleted successfully!');
  } catch (error) {
    console.error('Error deleting message:', error);
  }
}

module.exports = { deleteMessage };
