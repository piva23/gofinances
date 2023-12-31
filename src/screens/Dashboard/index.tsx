import React from 'react';

import { Container, Header, Photo, UserGreeting, UserName, UserWrapper, UserInfo, User, Icon } from './styles';
import HighlightCard from '../../components/HighlightCard';

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
                    <Icon name='power' />
                </UserWrapper>
            </Header>

            <HighlightCard/>
        </Container>
        
    )
}