import * as faceapi from 'face-api.js'

export async function loadModels() {
  try {
          await faceapi.nets.TinyFaceDetector.loadFromUri('public/models');
          await faceapi.nets.ssdMobilenetv1.loadFromUri('public/models');
          await faceapi.nets.faceLandmark68Net.loadFromUri('public/models');
          await faceapi.nets.faceRecognitionNet.loadFromUri('public/models');


        } catch (error) {
          console.log(error);
        }
}

export async function getFullFaceDescription(blob, inputSize = 512) {

  let scoreThreshold = 0.5;
  const OPTION = new faceapi.ssdMobilenetv1Options({
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
