import styled from "styled-components";

export const Form = styled.form`
    width: 420px;
    margin: 50px auto;
`;

export const FormInput = styled.input`
    color: var(--white-color);
    font-family: var(--primary-medium);
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid var(--form-border-color);
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;

    &:focus { 
        border: 2px solid var(--form-accent-color); 
    }
`;

export const Textarea = styled.textarea`
    height: 150px;
    line-height: 150%;
    resize: vertical;
    color: var(--white-color);
    font-family: var(--primary-medium);
    font-size: 18px;
    border-radius: 5px;
    background-color: transparent;
    border: 2px solid var(--form-border-color);
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;

    &:focus { 
        border: 2px solid var(--form-accent-color); 
    }
`;

export const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    font-family: var(--primary-bold);
    width: 130px;
    margin-left: auto;
    margin-right: auto;
    background: var(--form-border-color);
    border-radius: 5px;
    border: 0;
    color: var(--white-color);
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.3s;
    margin-top: -4px;

    &:hover,
    &:focus {
        background:var(--form-accent-color);
    }
`;