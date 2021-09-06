Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 90,

    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach(camera)

function take_snapshot() {
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = "<img id='caputure_img' src='" + data_url + "'>";
    })
}

console.log("ml5_version", ml5.version);

classifier = ml5.imageClassifier("MobileNet", model_loaded);

function model_loaded() {
    console.log("model_loaded");
}

function check() {
    img = document.getElementById('caputure_img');
    classifier.classify(img, gotResult)
}

function gotResult(error, result) {
    if(error) {
        console.log(error);
    }
    else{
        console.log(result);

        document.getElementById("object_name").innerHTML = result[0].label;
    }
}