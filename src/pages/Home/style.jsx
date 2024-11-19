import styled from "styled-components";

export const Main = styled.div`
    width: 500px;
    border: 2px solid rgba(255,255,255, .2);
    backdrop-filter: blur(50px);
    padding: 30px 40px;
    border-radius: 10px;
`

export const Box = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    margin: 20px 0;

    input {
        width: 100%;
        height: 100%;
        padding-left: 40px;
        font-size: 16px;
        outline: none;
        border: none;
        border-radius: 20px;
        background-color: rgba(255,255,255, .1);

        &::placeholder {
        color: #fff;
        }
    }
    

    img {
        position: absolute;
        left: 2%;
        top: 50%;
        transform: translateY(-50%);
    }
`

export const Button = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    letter-spacing: 2px;
    margin-top: 30px;
    cursor: pointer;
    background-color: rgba(255,255,255, .1);
    transition: 500ms;

    &:hover {
        background-color: rgba(255,255,255, .5);
        font-size: 25px;
    }
`

export const Title = styled.h1`
    text-align: center;
    color: #3d0844;
`

export const Paragraph = styled.p `
    text-align: center;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 20px;

    a {
        color: #3d0844;
        text-decoration: none;
        font-weight: 700;
        font-size: 20px;
        transition: 500ms;

        &:hover {
            color: #9b0f55;
        }
    }
`