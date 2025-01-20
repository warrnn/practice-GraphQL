const books = [
	{
		id: "book_1",
		title: "Harry Potter and the Chamber of Secrets",
		author: "J.K. Rowling",
		published_at: "1998-07-02",
		category: "Fantasy",
		total: 10,
	},
	{
		id: "book_2",
		title: "Harry Potter and the Philosopher's Stone",
		author: "J.K. Rowling",
		published_at: "1997-06-26",
		category: "Fantasy",
		total: 10,
	},
];

const members = [
	{
		id: "member_1",
		name: "Bryan Mogens Warren",
		email: "bryanwarren@gmail.com",
		verified: true,
	},
	{
		id: "member_2",
		name: "Dadang Sumedang",
		email: "dadangsumendang@gmail.com",
		verified: true,
	},
];

const lendings = [
	{
		id: "lend_1",
		book_id: "book_1",
		member_id: "member_1",
		borrowed_at: "2024-06-28",
		returned_at: "2024-07-28",
	},
	{
		id: "lend_2",
		book_id: "book_2",
		member_id: "member_1",
		borrowed_at: "2024-06-28",
		returned_at: "2024-07-28",
	},
];

export { books, members, lendings };
