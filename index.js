const express = require('express');
const path = require('path');
const app = express();
const members = [
	{
		id: 1,
		name: 'john doe',
		email: 'john@gmail.com',
		status: 'active',
	},
	{
		id: 2,
		name: 'bob williams',
		email: 'bob@gmail.com',
		status: 'inactive',
	},
	{
		id: 3,
		name: 'shannon jackson ',
		email: 'shannon@gmail.com',
		status: 'active',
	},
	{
		id: 4,
		name: 'shannon jackson ',
		email: 'shannon@gmail.com',
		status: 'active',
	},
];
app.get('/api/members', (req, res) => {
	res.json(members);
});

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server started on ${port}`));
