import axios from 'axios'

// ACTION TYPES
const GET_TRANSLATION = 'GET_TRANSLATION'

// ACTION CREATER
export const translate = translated => ({
  type: GET_TRANSLATION,
  translated
})

export const translateOne = (message, lang) => async dispatch => {
  try {
    let res = await axios.post('/api/translate', {q: message, lang: lang})
    let translated = {translate: res.data.translation}
    dispatch(translate(translated))
  } catch (err) {
    console.error(err.message, err.response)
  }
}

export let defaultState = {
  translate: ''
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_TRANSLATION:
      return action.translated
    default:
      return state
  }
}
