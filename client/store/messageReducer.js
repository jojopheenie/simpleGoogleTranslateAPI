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
    dispatch(resetLoading())
    let res = await axios.post('/api/translate', {q: message, lang: lang})
    let translated = {message: res.data.translation}
    dispatch(translate(translated))
  } catch (err) {
    console.error(err.message, err.response)
  }
}

export let defaultState = {
  translate: {}
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_TRANSLATION:
      return state.translate = action.translated
    default:
      return state
  }
}
