import { useState } from "react"
import "./style.css"

const GetUserComponent = ({ setUser, setIsLoggedIn }) =>{

	const [userInput, setUserInput] = useState("")

	const HandleLogin = (userInput) => {
		setUser(userInput)
		setIsLoggedIn(true)
	}

	return(
		<form>
			<input
				placeholder = "Insira seu nome"
				type        = "text"
				value       = {userInput}
				onChange    = {(event) => setUserInput(event.target.value)}
			/>
			<button
				onClick={() => HandleLogin(userInput)}
			>
			Acessar com o nome
			</button>
		</form>
	)
}

export default GetUserComponent