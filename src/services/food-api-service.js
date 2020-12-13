import config from '../config'


const FoodApiService = {
  getBunByName(name) {
    return fetch(`${config.API_ENDPOINT}/food/buns&bun_name=${name}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBunById(bunId) {
    return fetch(`${config.API_ENDPOINT}/food/buns/${bunId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getSauceByName(name) {
    return fetch(`${config.API_ENDPOINT}/food/sauces&sauce_name=${name}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getSauceById(sauceId) {
    return fetch(`${config.API_ENDPOINT}/food/sauces/${sauceId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getFillingByName(name) {
    return fetch(`${config.API_ENDPOINT}/food/fillings&filling_name=${name}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getFillingById(fillingId) {
    return fetch(`${config.API_ENDPOINT}/food/fillings/${fillingId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getAllItems() {
    return fetch(`${config.API_ENDPOINT}/food`, {
        headers: {
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
  },
  getItemByName(name) {
    return fetch(`${config.API_ENDPOINT}/food/items&item_name=${name}`, {
        headers: {
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
  },
  getCreations() {
    return fetch(`${config.API_ENDPOINT}/creations`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postCreation(creation) {
    return fetch(`${config.API_ENDPOINT}/creations`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        creation
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getCreationById(creationId) {
    return fetch(`${config.API_ENDPOINT}/creations/${creationId}`, {
        headers: {
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
  },
  updateCreation(creationId, newInfo) {
    return fetch(`${config.API_ENDPOINT}/creations/${creationId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        newInfo
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default FoodApiService