const { notion } = require('./notionClient');
const databaseId = process.env.NOTION_DATABASE_ID;

async function testDatabase() {
  try {
    const response = await notion.databases.retrieve({ database_id: databaseId });
    console.log('Database retrieved successfully:', response);
  } catch (error) {
    console.error('Error retrieving database:', error.body);
  }
}

testDatabase();
