import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Hahmlet";
        src: url("/fonts/Hahmlet.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Hahmlet', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #f7f7f7;
        overflow-x: hidden;
    }

    a:hover {
        color: white;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Hahmlet', serif;
        color: #000000;
        font-size: 40px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #ffff;
        font-size: 12px;        
        line-height: 1.41;

        @media only screen and (max-width: 414px) {
          font-size: 8px;
        }
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: gray;

        :hover {
            color: white !important;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .location {
        background-color: #000000;
        padding: 15px 50px 8px 50px;
    }

    .logoGrande {
         padding:55px 40px 0 105px;
    }

    .header {
        padding: 0;
    }

    .network{
        text-align: right;
        position: relative;
        left:540px;

        @media only screen and (max-width: 414px) {
          display: none;
        }
    }

    @media only screen and (max-width: 414px) {

        .logoGrande {
            padding: 0;
        }
          .logoGrande img{
              width:100%;
              height:100%;
              padding-top: 40px;
          }
        }

        @media only screen and (max-width: 890px) {

            .logoGrande {
            padding: 0;
        }
            .logoGrande img{
              width:100%;
              height:100%;
              padding-top: 40px;
          }
        }
`;
