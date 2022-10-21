import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ScreenContainer from "../components/ScreenContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/root-reducer";
import { Usuario } from "../@types/entities/Usuario";
import { login } from "../features/user/userActions/userActions";
import MenuItemList, { MenuItemListType } from "../components/MenuItemList";

type Props = {};

const UserMenu = (props: Props) => {
  const user = useSelector((state: RootState) => state.user.user) as Usuario;

  const dispatch = useDispatch();
  /*
  useEffect(() => {
    dispatch(
      login({
        id: 0,
        nome: "Renato Diniz de Souza",
        email: "renatodiniz@gmail.com",
      })
    );
  }, []);
  */

  const listaMenu: MenuItemListType[] = [
    {
      icon: "plus",
      title: "Dados Pessoais",
      action: () => console.log("cliquei"),
      description: "Entre para ver os dados pessoais",
    },
  ];

  return (
    <ScreenContainer>
      <View>
        <Text>Seção do usuario</Text>
        <Text>{user.nome}</Text>
        <Text>{user.email}</Text>
      </View>
      <View>
        {listaMenu.map((item, idx) => (
          <MenuItemList key={idx} menuItemList={item} />
        ))}
      </View>
    </ScreenContainer>
  );
};

export default UserMenu;

const styles = StyleSheet.create({});
