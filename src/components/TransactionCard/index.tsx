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

import { categories } from "../../utils/categories";

interface TransactionCardProps {
    data : {
    type: 'up' | 'down';
    name: string;
    amount: string;
    category: string;
    date: string;
    }
}


export function TransactionCard ({
    data
} : TransactionCardProps) {

    const [category] = categories.filter(
        item => item.key === data.category
    );

    return (
        <Container>
            <Title>{data.name}</Title>
            <Amount type={data.type}>
                {data.type === 'down' && '-'}
                {data.amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name={category.icon}/>
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>

        </Container>

    )
}