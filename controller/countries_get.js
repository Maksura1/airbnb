// Database
const db = require('../db')

module.exports = (req, res) => {
	db.query(`SELECT DISTINCT country FROM homes`, (err, result) => {
		if (err) {
			console.log('err', err)
		} else {
			console.log('result', result);
			res.send(result.rows)
		}
	})
}
