const Reader = {
	init: function() {
		this.video = document.getElementById('video')
		this.cvs = document.getElementById('cvs')
		this.ctx = this.cvs.getContext('2d')
		this.$status = document.getElementById('status')

		this.videoInterval = null

		this.stream = null
		this.allowed = false
	},

	active: async function () {
		await this.requestCamera()

		this.startVideo2cvs()

		if (this.allowed === true) {
			this.video.srcObject = this.stream
			this.video.play()
		} else {
			this.$status.innerHTML = 'cannot use video'
		}
	},

	startVideo2cvs: function() {
		this.videoInterval = setInterval(_=>{
			this.ctx.drawImage(this.video, 0, 0, this.video.width, this.video.height)

			let result = jsqr(this.ctx.ImageData(), this.video.width, this.video.height)

			this.$status.innerHTML = result
		},20)
	},

	stopVideo2cvs: function() {
		clearInterval(this.videoInterval)
	},

	requestCamera: async function() {
		await navigator.mediaDevices.getUserMedia({video: true})
		.then( mediaStream=>{
			this.stream = mediaStream
			this.allowed = true
		})
		.catch( err => {
			console.log(err)
		})
	}
}


window.onload = function() {
	Reader.init()
	Reader.active()
}