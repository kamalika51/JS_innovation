class Contact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
  display() {
    return `${this.name} - ${this.phone} - ${this.email}`;
  }
}

const contacts = [
  new Contact('Arun Kumar', '900-1111', 'arun@example.com'),
  new Contact('Meena Rani', '900-2222', 'meena@example.com'),
  new Contact('Suresh Das', '900-3333', 'suresh@example.com')
];

function printContacts(list, elementId) {
  const ul = document.getElementById(elementId);
  ul.innerHTML = "";
  list.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c.display();
    ul.appendChild(li);
  });
}

// Add more contacts
contacts.push(
  new Contact('Divya Singh', '900-4444', 'divya@example.com'),
  new Contact('Rahul Nair', '900-5555', 'rahul@example.com')
);

const extraContacts = [ new Contact('Kavya Sharma', '900-6666', 'kavya@example.com') ];
const allContacts = [...contacts, ...extraContacts];

// Show contacts
printContacts(contacts, "allContacts");
printContacts(allContacts, "mergedContacts");

function showContact(prefix) {
  return `${prefix} ${this.name} (${this.phone}, ${this.email})`;
}

const output = document.getElementById("output");

document.getElementById("callBtn").onclick = () => {
  output.textContent += showContact.call(contacts[0], "CALL:") + "\n";
};
document.getElementById("applyBtn").onclick = () => {
  output.textContent += showContact.apply(contacts[1], ["APPLY:"]) + "\n";
};
document.getElementById("bindBtn").onclick = () => {
  const boundDisplay = showContact.bind(contacts[2], "BIND:");
  output.textContent += boundDisplay() + "\n";
};
