const { notion } = require('./notionClient');
const databaseId = process.env.NOTION_DATABASE_ID;

async function readMessages(recipient, showArchived = false) {
  try {
    // Add a filter to exclude archived messages unless "showArchived" is true
    const filterConditions = [
      {
        property: 'Recipient',
        rich_text: {
          equals: recipient,
        },
      }
    ];

    if (!showArchived) {
      filterConditions.push({
        property: 'Archived',
        checkbox: {
          equals: false,  // Show only non-archived messages
        },
      });
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: filterConditions,
      },
    });

    console.log(`Messages (${response.results.length}):`);
    response.results.forEach((message) => {
      const sender = message.properties.Sender.rich_text[0]?.text?.content;
      const content = message.properties.Message.title[0]?.text?.content;
      const messageId = message.id;
      const isArchived = message.properties.Archived.checkbox ? '[Archived]' : '';

      console.log(`ID: ${messageId}\nfrom: ${sender} ${isArchived}\nMessage: ${content}\n`);
    });
  } catch (error) {
    console.error('Error reading messages:', error);
  }
}

module.exports = { readMessages };
