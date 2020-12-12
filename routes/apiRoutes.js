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

router.get("/description/:image", function(req, res) {
    console.log("Hitting Description API");
    const file = req.params.image.replace(/=|.jpg|.png/g, "");
    console.log(file);
    let description;
    // fs.readdirSync(path.join(__dirname, "/client/public/documents/descriptions/" + req.params.image + ".txt"));
    fs.readFile(path.join(__dirname, "/client/public/descriptions/" + file.trim() + ".txt"), "utf8", (err, data) =>{
        console.log(data);
        res.send(data);
    });
    
})

module.exports = router;