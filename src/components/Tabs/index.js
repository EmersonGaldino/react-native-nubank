import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, TabsContatiner, TabItem, TabText } from "./styles";

export default function Tabs() {
  return (
    <Container>
      <TabsContatiner>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar Amigos</TabText>
        </TabItem>
      </TabsContatiner>
    </Container>
  );
}
