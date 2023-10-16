import { useState } from "react";

export const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        try {
            let response = await fetch("http://localhost:3001/my-portfolio/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(details),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let result = await response.json();
            alert(result.status);
            
        } catch (error) {
            console.error("Error occurred:", error);
            setStatus("Error sending message");
        }
        e.target.reset();
        setStatus("Submit");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
            </div>
            <button type="submit">{status}</button>
        </form>
    );
};