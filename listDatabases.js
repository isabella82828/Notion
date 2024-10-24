const { notion } = require('./notionClient');

async function listDatabases() {
  try {
    const response = await notion.search({
      filter: {
        value: 'database',
        property: 'object',
      },
    });
    console.log('Databases:', response.results);
  } catch (error) {
    console.error('Error listing databases:', error.body);
  }
}

listDatabases();
