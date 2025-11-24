import Display from "./display";

export default function Algorithm() {
  return (
    <div className="p-6 space-y-6">
      <Display
        title="Longest Substring Without Repeating Characters"
        prompt={`Given a string s, find the length of the longest substring without repeating characters.`}
        solution={`
function lengthOfLongestSubstring(s: string): number {
  // variable to store the max length among substrings
  let max = 0;

  // variable to store the start index of the substring we are in
  let start = 0;

  // set to store all unique characters in s
  const seen = new Set<string>();

  // loop through the string using the loop's index to identify the end of the substring
  for(let end = 0; end < s.length; end++) {
  
    // the check to move to a new substring if the charcter at index end already exisit in set
    while(seen.has(s[end])) {
      // remove the chat at index start from the set until we remove the one found above
      seen.delete(s[start]);
      // add 1 to start to reset the begining of the new substring
      start++
    }
    
    // add the new unique char at index end to the set
    seen.add(s[end]);

    // variable to store this new substring length
    const newLength = end - start + 1;

    // update max to be the highest value between max and newLength
    max = Math.max(max, newLength);
  }
  
  //after checking all the possible substrings return longest length possible
  return max;
}
`}
        result={`Output: 3\nSubstring: "abc"`}
      />

      {/* <Display
        title=""
        prompt={``}
        solution={``}
        result={``}
      /> */}
    </div>
  );
}
