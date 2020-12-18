const router = require('express').Router()
module.exports = router

const {Translate} = require('@google-cloud/translate').v2
const projectId = 'translate-chat-297404'
const translate = new Translate({
  projectId: projectId,
  credentials: {
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL
  }
})

async function translater(text, target) {
  const {Translate} = require('@google-cloud/translate').v2
  const projectId = 'translate-chat-297404'
  const translate = new Translate({
    projectId: projectId,
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_CLIENT_EMAIL
    }
  })

  async function translateText() {
    let [translations] = await translate.translate(text, target)
    return translations
  }
  let result = await translateText()
  return result
}

router.post('/', async (req, res, next) => {
  try {
    apiId = process.env.API_ID
    let q = req.body.q
    let lang = req.body.lang
    let result = await translater(q, lang)
    res.json({translation: result})
  } catch (error) {
    next(err)
  }
})
