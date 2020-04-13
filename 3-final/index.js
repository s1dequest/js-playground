"use strict";
// 2. Move the addFavoriteBook() and printFavoriteBooks() to a Bookshelf class as methods. Modify them to use this to access the favoriteBooks array.
// 3. Fill out the definition of the `loadBooks(..)` function, which should receive an instance of the `Bookshelf` class that you will pass to it.
// 4. `loadBooks(..)` should call the provided `fakeAjax(..)`, using `BOOK_API` as the URL and an inline function expression as the callback.
// 5. The callback will be passed an array of book names. Loop through this array, passing each book name to the `addFavoriteBook(..)` method of the `Bookshelf` instance passed to `loadBooks(..)`. Then call the `printFavoriteBooks()` method.
// 6. Create an instance of `Bookshelf` class, and pass it as an argument to `loadBooks(..)`.
// Hint: Class instantiation: `new Whatever()`.
class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
  }
  
  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    console.log(`Favorite Books: ${this.favoriteBooks.length}`);
    for (let bookName of this.favoriteBooks) {
      console.log(String(bookName));
    }
  }
}

function loadBooks( /* .. */ ) {
	// TODO: call fakeAjax( .. );
}

var BOOK_API = "https://some.url/api";

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}