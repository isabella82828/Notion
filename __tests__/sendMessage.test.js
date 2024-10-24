// __tests__/sendMessage.test.js
const { sendMessage } = require('../sendMessage');
const { notion } = require('../notionClient');

// Mocking the Notion client
jest.mock('../notionClient', () => ({
  notion: {
    pages: {
      create: jest.fn(),
    },
  },
}));

describe('sendMessage', () => {
  test('should send a message successfully', async () => {
    notion.pages.create.mockResolvedValueOnce({}); // Mock success response

    await sendMessage('Alice', 'Bob', 'Hello Bob');

    expect(notion.pages.create).toHaveBeenCalledWith({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        'Sender': {
          rich_text: [{ text: { content: 'Alice' } }],
        },
        'Recipient': {
          rich_text: [{ text: { content: 'Bob' } }],
        },
        'Message': {
          title: [{ text: { content: 'Hello Bob' } }],
        },
      },
    });
  });

  test('should handle errors when sending a message fails', async () => {
    notion.pages.create.mockRejectedValueOnce(new Error('Failed to send message'));

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await sendMessage('Alice', 'Bob', 'Hello Bob');

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error sending message:', new Error('Failed to send message'));

    consoleErrorSpy.mockRestore();
  });
});
