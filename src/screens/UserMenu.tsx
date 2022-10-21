import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ScreenContainer, { styles } from "../components/ScreenContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/root-reducer";
import { Usuario } from "../@types/entities/Usuario";
import { login } from "../features/user/userActions/userActions";
import MenuItemList, { MenuItemListType } from "../components/MenuItemList";
import MAvatarImage from "../components/MAvatarImage";
import theme, { CustomTheme } from "../styles/theme";
import { useTheme } from "react-native-paper";

type Props = {};

const UserMenu = (props: Props) => {
  const { colors } = useTheme() as CustomTheme;

  const user = useSelector((state: RootState) => state.user.user) as Usuario;

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(
      login({
        id: 0,
        nome: "Renato Diniz de Souza",
        email: "renatodiniz@gmail.com",
      })
    );
  }, []);
  

  const listaMenu: MenuItemListType[] = [
    {
      icon: "key-outline",
      title: "Dados Pessoais",
      action: () => console.log("cliquei"),
      description: "Entre para ver os dados pessoais",
    },
    {
      icon: "text-box-outline",
      title: "Pedidos",
      action: () => console.log("clicou pedidos"),
      description: "Entre para ver os pedidos" 
    },
    {
      icon: "text-box-outline",
      title: "Últimos produtos vistos",
      action: () => console.log("clicou ultimo produtos vistos"),
      description: "Entre para ver os últimos produtos vistos" 
    },
    {
      icon: "key-outline",
      title: "Endereços",
      action: () => console.log("Clicou enderecos"),
      description: "Entre para ver os endereços cadastrados" 
    },
  ];

  return (
    <ScreenContainer>
      <View style={sytles.userInfo}>
        <MAvatarImage imageSize={48} imageUrl={"https://image-placeholder.com/images/actual-size/75x75.png"}/>
        
        <View>
          <Text style={{color: colors.primary, fontSize: 28, paddingTop: 8}}>{user.nome}</Text>
          <Text style={{color: colors.text, fontSize: 18}}>{user.email}</Text>  
        </View>
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

const sytles = StyleSheet.create({
  userInfo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
});
