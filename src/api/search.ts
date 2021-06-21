import axiosSvc from '@/utils/http'

const baseUrl = 'search'

export const reqSearch = (data: object) =>
  axiosSvc.axiosSvc({
    method: 'get',
    url: 'http://127.0.0.1:3000/search/files',
    headers: {
      'Content-Type': 'application/json',
    },
    params: data,
  })

export const getCities = (data: object) =>
  axiosSvc.axiosSvc({
    method: 'get',
    url: 'http://127.0.0.1:3000/search/cities',
    headers: {
      'Content-Type': 'application/json',
    },
    params: data,
  })
