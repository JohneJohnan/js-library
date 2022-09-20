function book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.info = function() {
        return this.title + ' by ' + this.author + ', ' + this.numberOfPages + ' pages, ' + (this.read ? 'read' : 'not read yet');
    };
}