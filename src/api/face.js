import * as faceapi from 'face-api.js'

async function updateResults() {
      if (!isFaceDetectionModelLoaded()) {
        return
      }

      const inputImgEl = $('#inputImg').get(0)
      const options = getFaceDetectorOptions()

      const results = await faceapi.detectAllFaces(inputImgEl, options)

      const canvas = $('#overlay').get(0)
      faceapi.matchDimensions(canvas, inputImgEl)
      faceapi.draw.drawDetections(canvas, faceapi.resizeResults(results, inputImgEl))
    }

    async function run() {
      // load face detection
      await changeFaceDetector(SSD_MOBILENETV1)

      // start processing image
      updateResults()
    }

    $(document).ready(function() {
      renderNavBar('#navbar', 'face_detection')
      initImageSelectionControls()
      initFaceDetectionControls()
      run()
    })
