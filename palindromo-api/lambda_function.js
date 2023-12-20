const { DateTime } = require('luxon');

function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}

function findNextPalindromeDate(startDate) {
  let currentDate = startDate.plus({ days: 1 });

  while (!isPalindrome(currentDate.toFormat('ddMMyyyy'))) {
    currentDate = currentDate.plus({ days: 1 });
  }

  return currentDate.toFormat('dd/LL/yyyy');
}

exports.lambdaHandler = async (event) => {
  const startDateStr = event.start_date || '12022021'; // Default start date
  const startDate = DateTime.fromFormat(startDateStr, 'ddLLyyyy');

  const nextPalindromeDate = findNextPalindromeDate(startDate);

  const response = {
    statusCode: 200,
    body: JSON.stringify({ next_palindrome_date: nextPalindromeDate }),
  };

  return response;
};
