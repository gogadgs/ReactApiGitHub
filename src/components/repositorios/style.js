import styled from 'styled-components';
import {Tabs,TabList,Tab,TabPanel} from 'react-tabs';



export const ConteudoTabs  = styled(Tabs)`
        font-size:16px;
        width:100%;
        margin-top:16px;

`
export const ConteudoTabList  = styled(TabList)`
    list-style-type:none;
    padding:4px;
    display:flex;
    margin:0;


`
ConteudoTabList.tabsRole = 'TabList';


export const ConteudoTab  = styled(Tab)`
    border-radius:16px;
    border:1px solid #00BFAE;
    padding:16px;
    user-select:none;
    cursor:pointer;
    color:#A3AB78;
    box-shadow: 0 0 1em rgba(0,255,100,0.4);
    z-index:99999;
    background-color:#FFF;
    margin:8px;

    
    &:hover{
        opacity:0.4;
        color:#011F26;
    
    &:focus{
        outline:none;
    }
    &.is-selected {
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
      }
    }
    
    
`;
ConteudoTabList.tabsRole = 'Tab';


export const ConteudoTabPanel  = styled(TabPanel)`
       padding:16px;
       border:1px solid #CCC;
       display:none;
       margin-top:-5px;


       &.is-selected{
        display:block;
       }
`
ConteudoTabList.tabsRole = 'tabPanel';

export const ListaEstilizadaRepositorios = styled.div`

       display:flex;
       justify-content: flex-start;
       flex-wrap:wrap;
       

`