function audiotaker() {
    navigator.mediaDevices.getUserMedia({audio: true});
    modeltoproject= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/jXjOf2B9L/model.json" , modelready);
    }
    function modelready() {
        modeltoproject.classify(resultser);

    }
      
    function resultser(error, results) {
        if (error) {
            console.log(error);
        } else {
            console.log(results);
            document.getElementById("shownameofsound").innerHTML= "I can hear - " + results[0].label;
            
            img= document.getElementById("imagegiver") ;

            if (results[0].label == "Background Noise") {
                img.src= "damnn.jpg" ;

            } else if (results[0].label == "cat"){
                img.src= "getty.jpg" ;
            }
            
           
            }
    }
    