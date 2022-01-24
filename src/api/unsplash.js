import axios from "axios";

export default axios.create({
     baseURL:'https://api.unsplash.com',
     headers: {
          Authorization: 'Client-ID tWHrdic2Md9kpnp0boIxBe_E165T3QSO2qKYulboiVc'

     }
})