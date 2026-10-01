function getLongestWord(sentence) {
  let cleanedSentence = sentence.replace(".", "");
  let longestLenCand = "";
  cleanedSentence.split(" ").forEach((word) => {
    console.log(word, longestLenCand);
    if (word.length > longestLenCand.length) longestLenCand = word;
  });

  return longestLenCand;
}

console.log(getLongestWord("coding is fun"));
console.log(getLongestWord("Coding challenges are fun and educational."));
