const { readMessages } = require('../readMessages');
const { notion } = require('../notionClient');

// Mock the Notion client
jest.mock('../notionClient', () => ({
  notion: {
    databases: {
      query: jest.fn(),
    },
  },
}));

describe('readMessages', () => {
  test('should read messages for a given recipient successfully', async () => {
    // Mock the Notion API response
    notion.databases.query.mockResolvedValueOnce({
      results: [
        {
          id: 'message123',
          properties: {
            Sender: { rich_text: [{ text: { content: 'Alice' } }] },
            Recipient: { rich_text: [{ text: { content: 'Bob' } }] },
            Message: { title: [{ text: { content: 'Hello Bob' } }] },
            Archived: { checkbox: false },
          },
        },
      ],
    });

    // Spy on console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Call the function
    await readMessages('Bob');

    // Expect console.log to be called with the correct message details
    expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining('Messages (1):'));
    expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining('from: Alice'));
    expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining('Message: Hello Bob'));

    // Restore the original console.log implementation
    consoleLogSpy.mockRestore();
  });

  test('should handle errors while reading messages', async () => {
    // Mock the Notion API to throw an error
    notion.databases.query.mockRejectedValueOnce(new Error('Failed to read messages'));

    // Spy on console.error
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Call the function
    await readMessages('Bob');

    // Expect console.error to be called with the correct error message
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error reading messages:', new Error('Failed to read messages'));

    // Restore the original console.error implementation
    consoleErrorSpy.mockRestore();
  });
});
