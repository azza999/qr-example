const Reader = {
	init: function() {
		this.video = document.getElementById('video')
		this.$status = document.getElementById('status')
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
		.catch( err => {
			console.log(err)
			$status.innerHTML = 'cannot use video'
		})
	}
}


window.onload = function() {
	Reader.init()
	Reader.active()
}