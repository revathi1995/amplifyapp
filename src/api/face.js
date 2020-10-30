import * as faceapi from 'face-api.js';


export async function loadModels() {
  //const MODEL_URL = process.env.PUBLIC_URL + '/models';
  await faceapi.loadTinyFaceDetectorModel('public/models');
  await faceapi.loadFaceLandmarkTinyModel('public/models');
  await faceapi.loadFaceRecognitionModel('public/models');
}

export async function getFullFaceDescription(blob, inputSize = 512) {

  let scoreThreshold = 0.5;
  const OPTION = new faceapi.TinyFaceDetectorOptions({
    inputSize,
    scoreThreshold
  });
  const useTinyModel = true;


  let img = await faceapi.fetchImage(blob);

  let fullDesc = await faceapi
    .detectAllFaces(img, OPTION)
    .withFaceLandmarks(useTinyModel)
    .withFaceDescriptors();
  return fullDesc;
}
