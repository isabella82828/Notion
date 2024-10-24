const readline = require('readline');
const { sendMessage } = require('./sendMessage');
const { readMessages } = require('./readMessages');
const { deleteMessage } = require('./deleteMessage');
const { archiveMessage } = require('./archiveMessage');
const { searchMessages } = require('./searchMessages');  
const { markMessageAsReadOrUnread } = require('./markMessage');
const { starMessage } = require('./starMessage');  // Import the new function
const { setAutoReply } = require('./autoReply');  // Import the setAutoReply function


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log('\nPlease select an option:');
  console.log('- send: Send mail to a user.');
  console.log('- read: Check a user\'s mail.');
  console.log('- set-auto-reply: Set an auto-reply message.');
  console.log('- mark-read: Mark a message as read.');
  console.log('- mark-unread: Mark a message as unread.');
  console.log('- read-decrypted: Check and decrypt a user\'s mail.');
  console.log('- star: Star a message.');
  console.log('- unstar: Unstar a message.');  console.log('- search: Search messages by keyword.');
  console.log('- archive: Archive a message by ID.');
  console.log('- delete: Delete a message by ID.');
  console.log('- exit: Exit the program.\n');

  rl.question('$ ', (command) => {
    if (command === 'send') {
      rl.question('Sender: $ ', (sender) => {
        rl.question('Recipient: $ ', (recipient) => {
          rl.question('Message: $ ', (message) => {
            sendMessage(sender, recipient, message).then(() => showMenu());
          });
        });
      });
    
    } else if (command === 'read') {
      rl.question('User: $ ', (recipient) => {
        readMessages(recipient).then(() => showMenu());
      });
    } else if (command === 'mark-read') {
        rl.question('Message ID: $ ', (messageId) => {
          markMessageAsReadOrUnread(messageId, true).then(() => showMenu());
        });
      } else if (command === 'mark-unread') {
        rl.question('Message ID: $ ', (messageId) => {
          markMessageAsReadOrUnread(messageId, false).then(() => showMenu());
        });
    } else if (command === 'search') {
      rl.question('Keyword: $ ', (keyword) => {
        searchMessages(keyword).then(() => showMenu());
      });
    } else if (command === 'star') {
        rl.question('Message ID: $ ', (messageId) => {
          starMessage(messageId, true).then(() => showMenu());
        });
    } else if (command === 'set-auto-reply') {
        rl.question('User: $ ', (user) => {
          rl.question('Auto-Reply Message: $ ', (message) => {
            setAutoReply(user, message);
            showMenu();
          });
        });
    } else if (command === 'unstar') {
        rl.question('Message ID: $ ', (messageId) => {
          starMessage(messageId, false).then(() => showMenu());
        });
    } else if (command === 'archive') {
      rl.question('Message ID: $ ', (messageId) => {
        archiveMessage(messageId).then(() => showMenu());
      });
    } else if (command === 'delete') {
      rl.question('Message ID: $ ', (messageId) => {
        deleteMessage(messageId).then(() => showMenu());
      });
    } else if (command === 'exit') {
      console.log('Goodbye!');
      rl.close();
    } else {
      console.log('Invalid option. Please try again.');
      showMenu();
    }
  });
}

console.log('Welcome to NotionMail!');
showMenu();
