import React, { useCallback, useState } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//import { ActivityIndicator } from "react-native";
//import { VictoryPie } from "victory-native";
//import { RFValue } from "react-native-responsive-fontsize";
//import { addMonths, subMonths, format } from "date-fns";
//import { ptBR } from "date-fns/locale";
//import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
//import { useFocusEffect } from "@react-navigation/native";

import { useTheme } from "styled-components";
//import { useAuth } from "../../hooks/auth";
//import { useStorageData } from "../../hooks/storage";

//import { HistoryCard } from "../../components/HistoryCard";
//import { TransactionCardProps } from "../../components/TransactionCard";

import { categories } from "../../utils/categories";

import {
  Container,
  Header,
  Title,
  LoadContainer,
  Content,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month,

} from "./styles";

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

export default function Resume() {
  /* const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );

  const theme = useTheme();
  const { user } = useAuth();
  const { getItem } = useStorageData(); */

/*   function handleDateChange(action: "next" | "prev") {
    if (action === "next") {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  }

  async function loadData() {
    setIsLoading(true);

    const dataKey = `@gofinances:transactions_@user:${user.name}`;

    const response = await getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensive: TransactionCardProps) =>
        expensive.type === "negative" &&
        new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
        new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
    );

    const expensivesTotal = expensives.reduce(
      (acumulator: number, expensive: TransactionCardProps) => {
        return acumulator + Number(expensive.amount);
      },
      0
    );

    const totaByCategory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionCardProps) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const percent = `${((categorySum / expensivesTotal) * 100).toFixed(
          0
        )}%`;

        totaByCategory.push({
          key: category.key,
          color: category.color,
          name: category.name,
          total: categorySum,
          totalFormatted,
          percent,
        });
      }
    });

    setTotalByCategories(totaByCategory);
    setIsLoading(false);
  } */

  /* useFocusEffect(
    useCallback(() => {
    //  loadData();
    }, [selectedDate])
  ); */

  return (
    <Container>
      <GestureHandlerRootView>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      
        <Content
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: 16,
          }}
        >
          <ChartContainer>
            <MonthSelect>
              <MonthSelectButton>
                <MonthSelectIcon
                  name="chevron-left"
                  //onPress={() => handleDateChange("prev")}
                />
              </MonthSelectButton>

              <Month>
{/*                 {format(selectedDate, "MMMM, yyyy", { locale: ptBR })}
 */}              </Month>

              <MonthSelectButton>
                <MonthSelectIcon
                  name="chevron-right"
                  //onPress={() => handleDateChange("next")}
                />
              </MonthSelectButton>
            </MonthSelect>

            {/* <VictoryPie
              data={totalByCategories}
              colorScale={totalByCategories.map((category) => category.color)}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fontWeight: "bold",
                  fill: theme.colors.shape,
                },
              }}
              labelRadius={70}
              x="percent"
              y="total"
            /> */}
          </ChartContainer>

          {/* {totalByCategories.map((item) => (
            <HistoryCard
              key={item.key}
              title={item.name}
              amount={item.totalFormatted}
              color={item.color}
            />
          ))} */}
        </Content>
        </GestureHandlerRootView>
    </Container>
  );
}
