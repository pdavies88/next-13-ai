export async function GET(request) {
	const users = [
		{id: 1, name: 'Dom'},
		{id: 2, name: 'Brian'},
		{id: 3, name: 'Letty'},
	]

	return new Response(JSON.stringify(users))
}