import * as faceapi from 'face-api.js'

export async function loadModels() {
  //const MODEL_URL = process.env.PUBLIC_URL + '/models';
  await faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  await faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  await faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  await faceapi.nets.faceExpressionNet.loadFromUri('/models')
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
