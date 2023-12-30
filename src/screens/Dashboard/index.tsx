import React from 'react';

import { Container, Header, Photo, UserGreeting, UserName, UserWrapper, UserInfo, User } from './styles';

export default function Dashboard () {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri:'https://avatars.githubusercontent.com/u/125154632?v=4'}}/>
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Felipe Piva</UserName>
                        </User>
                    </UserInfo>
                </UserWrapper>
            </Header>
        </Container>
        
    )
}