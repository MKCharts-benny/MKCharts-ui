import axios from 'axios'

const baseUrl = '/api/results'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return (response.data)
}

const postResult = (result) => {
  const request = axios.post(baseUrl, result)
  return request.then(response => (response.data))
}

const resultService = {getAll, postResult}

export default resultService