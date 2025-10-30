const books = [
    { title: "Bumi", author: "Tere Liye", category: "Fiksi" },
    { title: "Matahari", author: "Tere Liye", category: "Inspirasi" },
    { title: "Bulan", author: "Tere Liye", category: "Fiksi" },
    { title: "Ekonomi Cerdas", author: "Andi", category: "Ekonomi" },
    { title: "Sejarah Dunia", author: "D. Kurnia", category: "Sejarah" },
];

function displayBooks(list = books) {
    const bookList = document.getElementById("book-list");
    if (!bookList) return;

    bookList.innerHTML = list.map(b =>
        `<div>
      <img src='https://via.placeholder.com/120x180?text=${b.title}' alt='${b.title}'>
      <p><b>${b.title}</b><br><small>${b.author}</small></p>
    </div>`
    ).join("");
}
displayBooks();

function filterCategory(cat) {
    if (!cat) return displayBooks();
    const filtered = books.filter(b => b.category === cat);
    displayBooks(filtered);
}

function filterBooks() {
    const q = document.getElementById("search").value.toLowerCase();
    const filtered = books.filter(b =>
        b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
    );
    displayBooks(filtered);
}

function login() {
    alert("Login berhasil (simulasi).");
    window.location.href = "index.html";
}

function register() {
    alert("Pendaftaran berhasil (simulasi).");
    window.location.href = "login.html";
}
