import React from "react";
import { FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Button } from "../../components/Form/Button";

import { categories } from "../../utils/categories";

import { Container, Header, Title, Category, Icon, Name, Footer, Separator} from "./styles";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {

  function handleCategorySelect(category: Category) {
    setCategory(category);
  }
  
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <GestureHandlerRootView>
            <Category
              onPress={() => handleCategorySelect(item)}
              isActive={category.key === item.key}
            >
              <Icon name={item.icon} />
              <Name>{item.name}</Name>
            </Category>
          </GestureHandlerRootView>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <GestureHandlerRootView>
          <Button title="Selecionar" onPress={closeSelectCategory} />
        </GestureHandlerRootView>
      </Footer>
    </Container>
  );
}
