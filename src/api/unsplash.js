import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 2uKlBhKE-BjeARltjW0yRsbRsV1TSmHiErdkNdaxPVM",
  },
});
