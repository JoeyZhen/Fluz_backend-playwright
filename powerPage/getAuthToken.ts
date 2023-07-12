import axios from "axios";

export async function getAuthToken(){
axios.defaults.headers.common['Authorization'] = 'Basic c3RhZ2luZ0ZsdXpDbGllbnQ6c3RhZ2luZ1N1cGVyUGFzc3dvcmQ=';

const res = await axios.post('http://localhost:8080/api/v2/user/login/traditional', 
  {
    credentials: { userLogin: '5035555555', password: '123123'},
      deviceDetails: {
      deviceId: 'E4EDF59D-CEAD-4FC8-8E3F-5899FE287575',
      interface: 'IOS',
      operationSystem: 'iOS',
      device: 'MOBILE',
      brand: 'Apple',
      model: 'iPhone 12',
      osVersion: '14.1',
      network: 'DEVOR',
      ipAddress: '98.10.50.222',
      macAddress: '02:00:00:00:00:00',
      softwareVersion: '5.0.0.2v187'}
      })
    return res;
}
