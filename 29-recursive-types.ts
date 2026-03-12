/*
  🎓 CHAPTER 29: RECURSIVE TYPES
  ------------------------------
  Recursive Types are like "Russian Dolls". 
  They are types that can contain themselves!
  Perfect for things like Folder structures or JSON data.
*/

// 1. THE FOLDER STRUCTURE: "A Folder can contain more Folders"
interface Folder {
  name: string;
  files: string[];
  subFolders?: Folder[]; // 👈 RECURSION! It contains itself.
}

const myComputer: Folder = {
  name: "Root",
  files: ["config.sys"],
  subFolders: [
    {
      name: "Documents",
      files: ["resume.pdf", "photo.jpg"],
      subFolders: [
        {
          name: "Work",
          files: ["project.ts"]
        }
      ]
    }
  ]
};

// 2. JSON DATA: "The Ultimate Recursive Type"
// A JSON value can be a string, number, OR another JSON object/array!
type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

const myData: JsonValue = {
  id: 1,
  meta: {
    tags: ["ts", "js"],
    owner: {
      name: "Tushar"
    }
  }
};

// SUMMARY:
// - Recursive types allow you to model complex, nested data.
// - It's essential for working with APIs and deep objects.
