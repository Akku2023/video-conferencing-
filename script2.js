const joinButton = document.getElementById('join-button');
    let localVideo = document.getElementById('local-video');
    
    let remoteVideo = document.getElementById('remote-video');

    // Media constraints
    const constraints = {
      video: true,
      audio: true
    };

    // Start the local video stream
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        localVideo.srcObject = stream;
      })
      .catch(error => {
        console.error('Error accessing media devices', error);
      });

    // Function to handle joining the video call
    function joinVideoCall() {
      // You can implement your own logic for joining the video call here
      // For simplicity, we'll just set the remote video to display the local video stream

      remoteVideo.srcObject = localVideo.srcObject;
    }

    joinButton.addEventListener('click', joinVideoCall);