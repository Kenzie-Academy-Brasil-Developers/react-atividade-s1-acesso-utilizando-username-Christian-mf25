

const WelcomePage = ({ user, setIsLoggedIn }) =>{

	const HandleLogout = () => setIsLoggedIn(false)

	return(
		<>
			<div>
				<h2>Bem-vindo, {user}</h2>
				<button onClick={HandleLogout}>
					Sair
				</button>
			</div>
		</>
	)
}

export default WelcomePage