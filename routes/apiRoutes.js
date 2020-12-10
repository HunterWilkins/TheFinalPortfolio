const router = require("express").Router();
const util = require("util");
const path = require("path");
const fs = require("fs");
let readdirAsync = util.promisify(fs.readdir);

router.get("/art", async (req, res) => {
    const artFolders = await readdirAsync(path.join(__dirname, "../client/public/images/Artwork"));
    const thumbnailFiles = artFolders.map(genre => {
        let thumbnailPath = path.join(__dirname, "../client/public/images/Artwork/" + genre + "/thumbnails");
        return {
            genre: genre,
            thumbnails: fs.readdirSync(thumbnailPath),   
        }
    });
    console.log(thumbnailFiles);
    res.json(thumbnailFiles);
});

module.exports = router;