import styled from "styled-components";


export const Input = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    justify-content:space-between;
    padding:4px;
    

    input{
        border:1px solid #ccc;
        border-radius:8px;
        width:100%;
        height:44px;
        padding:16px;
        font-weight: 700;
       
    }
    button{
        background-color:#FFF;
        color:#ccc;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius:20px;
        font-weight: bold;
        font-size:16px;
        color:#A3AB78;
        border:1px solid #00BFAE;
        
    
    &:hover{
        opacity:0.4;
        color:#011F26;
        background-color:#FAFAFA;
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    &:focus{
        outline:none;
    }
    span{
        font-weight: bold;
        color:#A3AB78;
        
    }
}

`