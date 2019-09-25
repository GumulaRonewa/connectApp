import ImagePicker from 'react-native-image-picker';

var options = {
  title: 'Select images',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
let choosePhoto = (cb) => {

  ImagePicker.launchImageLibrary(options, (response) => {
    if (response.uri) {
    	 let source = { uri: response.uri };
    	 cb(source, response.data);

    }
    
  });
}
module.exports = choosePhoto;
