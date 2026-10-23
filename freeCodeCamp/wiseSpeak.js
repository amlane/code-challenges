/*
Speak Wisely, You Must
Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:

- Words are separated by a single space.
- Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
- Move all words before and including that word to the end of the sentence and:
- Preserve the order of the words when you move them.
- Make them all lowercase.
- And add a comma and space before them.
- Capitalize the first letter of the new first word of the sentence.
- All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
- Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.

For example, given "You must speak wisely." return "Speak wisely, you must."

Tests:
wiseSpeak("You must speak wisely.") should return "Speak wisely, you must."
wiseSpeak("You can do it!") should return "Do it, you can!"
wiseSpeak("Do you think you will complete this?") should return "Complete this, do you think you will?"
wiseSpeak("All your base are belong to us.") should return "Belong to us, all your base are."
wiseSpeak("You have much to learn.") should return "Much to learn, you have."
*/

function wiseSpeak(sentence) {
  const separators = ["have", "must", "are", "will", "can"];
  const punctuation = sentence.slice(-1);
  const sentenceArr = sentence.toLowerCase().split(" ");
  let sepIndex;

  for (let i = 0; i < separators.length; i++) {
    if (sepIndex === undefined && sentenceArr.indexOf(separators[i]) !== -1) {
      sepIndex = sentenceArr.indexOf(separators[i]);
      break;
    }
  }

  const newSentence = `${sentenceArr
    .slice(sepIndex + 1)
    .join(" ")
    .replace(
      punctuation,
      ",",
    )} ${sentenceArr.slice(0, sepIndex + 1).join(" ")}${punctuation}`;

  return newSentence.charAt(0).toUpperCase() + newSentence.slice(1);
}

module.exports = wiseSpeak;
