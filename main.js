//https://teachablemachine.withgoogle.com/models/G0-K6PoZL/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/G0-K6PoZL/',modelReady()) 
}

function modelReady()
{
    console.log('Model is Ready!')
    classifier.classify(gotResults)
}