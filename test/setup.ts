// Import the 'rm' function from the 'fs/promises' module to delete the 'test.sqlite' file before each test.
import { rm } from 'fs/promises';
// Import the 'join' function from the 'path' module to join the current directory with the 'test.sqlite' file.
import { join } from 'path';

// Use the 'global.beforeEach()' function to delete the 'test.sqlite' file before each test.
global.beforeEach(async () => {
  // Add a 'try/catch' block, to handle to problem when there is no 'test.sqlite' file to delete. In that case the code inside the 'try' block will throw an error, that we doesn't want to catch, because this is the expected result (the db should not exist before the test).
  try {
    // Use the 'await' keyword to wait for the 'rm' function to delete the 'test.sqlite' file.
    await rm(join(__dirname, '..', 'test.sqlite'));
    // Catch the error, and do nothing with it (already explained above).
  } catch (err) {}
});
