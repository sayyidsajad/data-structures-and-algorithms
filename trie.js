class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isWord = true;
  }

  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.isWord;
  }

  startsWith(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }

  printPrefixes(node = this.root, prefix = "") {
    if (node.isWord) {
      console.log(prefix);
    }
    for (const [char, childNode] of Object.entries(node.children)) {
      this.printPrefixes(childNode, prefix + char);
    }
  }

  searchPrefix(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!current.children[char]) {
        return [];
      }
      current = current.children[char];
    }
    return this.printPrefixes(current, prefix);
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");

trie.printPrefixes();
// trie.searchPrefix('apricotes')
