let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let search = prompt("Enter a name to search for:").toLowerCase();

for(let i = 0; i< names.length; i++) {

    if(names[i].toLowerCase() === search) {
        document.write("Name found: " + names[i]);
        break;
    } else if(i >= names.length -1) {
        document.write("Name not found: " + search);
    }
}