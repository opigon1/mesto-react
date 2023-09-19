import { apiConfig } from "./ApiConfig";

class Api {
  #url;
  #headers;

  constructor({ url, headers }) {
    this.#url = url;
    this.#headers = headers;
  }

  getAllInfo() {
    return Promise.all([this.getCards(), this.getUserInfo()]);
  }

  #handleResponce(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  getUserInfo() {
    return fetch(`${this.#url}users/me`, {
      headers: this.#headers,
      method: "GET",
    }).then((res) => {
      return this.#handleResponce(res);
    });
  }

  getCards() {
    return fetch(`${this.#url}cards`, {
      headers: this.#headers,
      method: "GET",
    }).then((res) => {
      return this.#handleResponce(res);
    });
  }

  deleteCard(id) {
    return fetch(`${this.#url}cards/${id}`, {
      headers: this.#headers,
      method: "DELETE",
    }).then((res) => {
      return this.#handleResponce(res);
    });
  }

  addCard({ name, link }) {
    return fetch(`${this.#url}cards`, {
      headers: this.#headers,
      method: "POST",
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => {
      return this.#handleResponce(res);
    });
  }

  editUserInfo(data) {
    return fetch(`${this.#url}users/me`, {
      headers: this.#headers,
      method: "PATCH",
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => {
      return this.#handleResponce(res);
    });
  }

  editUserAvatar(data) {
    return fetch(`${this.#url}users/me/avatar`, {
      headers: this.#headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: data,
      }),
    }).then((res) => {
      return this.#handleResponce(res);
    });
  }

  handleLikeCard(cardId, like) {
    return fetch(`${this.#url}cards/${cardId}/likes`, {
      method: like ? "DELETE" : "PUT",
      headers: this.#headers,
    }).then((res) => {
      return this.#handleResponce(res);
    });
  }
}

export const api = new Api(apiConfig);
