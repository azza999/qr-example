const Reader = {
	init: function() {
		this.video = document.getElementById('video')
		this.stream = null
		this.allowed = false
	},
	active: async function () {
		await this.requestCamera()

		if (this.allowed === true) {
			this.video.src = this.stream
		} else {
			
		}
	},
	requestCamera: function() {
		navigator.mediaDevices.getUserMedia({video: true})
		.then( mediaStream=>{
			this.stream = mediaStream
			this.allowed = true
		})
	}
}


window.onload = function() {
	Reader.init()
	Reader.active()
}