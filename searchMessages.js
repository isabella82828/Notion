const { notion } = require('./notionClient');
const databaseId = process.env.NOTION_DATABASE_ID;

async function searchMessages(keyword) {
  try {
    // Query the database for messages containing the keyword
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Message',
        title: {
          contains: keyword,  // Search for the keyword in the Message title
        },
      },
    });

    // Check if any messages were found
    if (response.results.length === 0) {
      console.log(`No messages found with the keyword: "${keyword}"`);
      return;
    }

    // Display the found messages
    console.log(`Found ${response.results.length} message(s) with the keyword "${keyword}":`);
    response.results.forEach((message) => {
      const sender = message.properties.Sender.rich_text[0]?.text?.content;
      const content = message.properties.Message.title[0]?.text?.content;
      const messageId = message.id;
      console.log(`ID: ${messageId}\nFrom: ${sender}\nMessage: ${content}\n`);
    });
  } catch (error) {
    console.error('Error searching messages:', error);
  }
}

module.exports = { searchMessages };
