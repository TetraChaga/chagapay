const Button = ({ style, onClick }) => (
	<button
		type="button"
		onClick={onClick}
		className={`px-6 py-4 text-lg font-medium rounded-[10px] outline-none font-poppins bg-blue-gradient text-primary ${style}`}>
		Get Started
	</button>
)

export default Button
