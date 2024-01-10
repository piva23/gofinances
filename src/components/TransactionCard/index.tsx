import React from "react";
import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date

} from "./styles";

interface TransactionCardProps {
    data : {
    type: 'up' | 'down';
    title: string;
    amount: string;
    category: CategoryProps;
    date: string;
    }
}

interface CategoryProps {
    name: string;
    icon: string;
}

export function TransactionCard ({
    data
} : TransactionCardProps) {
    return (
        <Container>
            <Title>{data.title}</Title>
            <Amount type={data.type}>
                {data.type === 'down' && '-'}
                {data.amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name={data.category.icon}/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>

        </Container>

    )
}