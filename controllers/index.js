const fs = require('fs')
const data = require('../data.json')

module.exports = { 
    index: async (req, res, next) => { 
        try { 
            return res.status(200).json({
                status: true,
                message: 'test build docker image sendiri!'
            });
        } catch(err) { 
            next(err)
        }
    },

    addData : async (req, res, next) => { 
        try {
            randomName = "Testing To Create Name"

            // const user = await Users.create({
            //     username: randomName
            // });
            //
            fs.writeFileSync("../data/data.json", JSON.stringify(randomName));  

            return res.status(200).json({
                status: true,
                message: 'berhasil',
                data: randomName
            });
        } catch (err) {
            next(err);
        }
    }, 

    showData : async (req, res, next) => { 
        try {
            // const user = await Users.findAll();
            const user = fs.readFileSync("../data/data.json");  

            return res.status(200).json({
                status: true,
                message: 'berhasil',
                data: user
            });
        } catch (err) {
            next(err);
        }
    }
}
