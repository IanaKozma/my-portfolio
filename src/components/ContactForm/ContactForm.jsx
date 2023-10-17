import { useState } from "react";
import { Container } from "../Header/Header.styled";
import { Form, FormInput, Textarea, SubmitButton } from "./ContactForm.styled";

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
        <Container>
            <Form onSubmit={handleSubmit}>
                <div>
                    <FormInput type="text" id="name" placeholder="Name" required />
                </div>
                <div>
                    <FormInput type="email" id="email" placeholder="E-mail" required />
                </div>
                <div>
                    <Textarea id="message" placeholder="Comment" required />
                </div>
                <SubmitButton type="submit">{status}</SubmitButton>
            </Form>
        </Container>
    );
};