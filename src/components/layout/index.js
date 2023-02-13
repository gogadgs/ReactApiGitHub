import React from 'react';
import * as S from './style';
import Header  from '../header';



const Layout = ({children}) => {

   
    return (
        <S.ContainerLayout>
            <Header/>
            {children}
          
        </S.ContainerLayout>
    );
}

export default Layout;
