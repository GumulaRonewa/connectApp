import RNFetchBlob from 'rn-fetch-blob'
import axios from 'axios';

let upload = (data) => {
  return RNFetchBlob.fetch('POST', 'http://196.24.172.173:3000/images/add', {
    Authorization : "Bearer access-token",
    otherHeader : "foo",
    'Content-Type' : 'multipart/form-data',
  }, data);
}

module.exports = upload;