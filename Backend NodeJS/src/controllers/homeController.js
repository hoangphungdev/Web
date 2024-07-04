

const getHomePage = (req, res) => {
    res.send('Hello Wdadd!')
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getTest
}
