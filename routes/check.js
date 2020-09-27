const { Router } = require("express");
const randomUseragent = require('random-useragent');
const fetch = require("node-fetch");

const router = Router();


router.get("/", async (req, res) => {
    try {
        const url = req.query.url;    
        const resp = await fetch(url, {
            method: "HEAD",
            headers: {
                "User-Agent": randomUseragent.getRandom()
            }
        });

        return res.status(200).json({
            ok: true,
            data: {
                url: url,
                status: resp.status
            }
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: error.message
        });
    }
})

module.exports = router;