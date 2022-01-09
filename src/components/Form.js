import React, { useRef } from 'react'
import './formStyle.scss'

function Form() {
	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const emailRef = useRef(null);
	const messageRef = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = {
			firstName: firstNameRef.current.value,
			lastName: lastNameRef.current.value,
			email: emailRef.current.value,
			message: messageRef.current.value
		}
		console.log(JSON.stringify(data));
	}

	return (
		<div className="container">
			<h1>Contact us</h1>
			<form onSubmit={handleSubmit} className="form">
				<div className="name">
					<label htmlFor="firstName">First Name</label>
					<input type="text" name="firstName" className="firstName" tabIndex="1" ref={firstNameRef} />
					<label htmlFor="lastName">Last name</label>
					<input type="text" name="lastName" className="lastName" tabIndex="2" ref={lastNameRef} />
				</div>
				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" className="email" tabIndex="3" placeholder="example@corp.com" ref={emailRef} />
				<label htmlFor="message">Message</label>
				<textarea placeholder="Start typing..." className="message" name="message" ref={messageRef} />
				<button type="submit" className="send">Send</button>
			</form>
		</div>
	)
}
export default Form
