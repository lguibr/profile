export default [
	{
		name: "email",
		type: "string",
		value: "lgpelin92@gmail.com",
		action: () => {
			return window.open("mailto:lgpelin92@gmail.com")
		}
	},
	{
		name: "phone",
		type: "string",
		value: "+55 37 991640818",
		action: () => {
			var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
			if (isMobile) {
				window.open("tel:+55-37991640818")
			} else {
				// copyToClipboard("+55 37 99164-0818")
			}
		}
	},
	{
		name: "whatsapp",
		type: "url",
		value: "+55 37 991640818",
		action: () => {
			return window.open(
				"http://api.whatsapp.com/send?1=pt_BR&phone=5537991640818"
			)
		}
	},
	{
		name: "linkedin",
		type: "url",
		value: "linkedin.com/in/lguibr",
		action: () => {
			return window.open("https://linkedin.com/in/lguibr")
		}
	},
	{
		name: "github",
		type: "url",
		value: "github.com/lguibr",
		action: () => {
			return window.open("https://github.com/lguibr")
		}
	}
]

function copyToClipboard(string) {
	navigator.clipboard.writeText(string).then(function() {
		alert("Telefone copiado para a area de transferencia")
	})
}
