import { AnyAction } from "redux";
import { Loja } from "../../../@types/entities/Loja";
import { Usuario } from "../../../@types/entities/Usuario";
import { Cart } from "../../../@types/app/carrinhoTypes";
import CarrinhoActionTypes from "../carrinhoActions/carrinhoActionsTypes";
type carrinhoTypes = {
  isFetching: boolean;
  error: string | null;
  carrinho: Cart;
};

const carrinhoInitialState: carrinhoTypes = {
  isFetching: false,
  error: null,
  carrinho: {
    total: 0,
    itens: [],
  },
};

const carrinhoReducer = (state = carrinhoInitialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case CarrinhoActionTypes.ADD_ITEM:
      let novoCarrinho: Cart = { ...state.carrinho };
      const haveItem = novoCarrinho.itens.findIndex(payload.id);
      if (haveItem >= 0) {
        novoCarrinho.itens[haveItem].quantidade++;
      } else {
        novoCarrinho.itens.push(payload);
      }

      //Verificar se ja existe item do carrinho
      return {
        ...state,
        isFetching: true,
        error: null,
        carrinho: novoCarrinho,
      };
    case CarrinhoActionTypes.REMOVE_ITEM:
      return {
        ...state,
        isFetching: false,
        error: null,
        carrinho: {
          ...state.carrinho,
          itens: state.carrinho.itens.filter(
            (item) => item.produto.id !== payload.id
          ),
        },
      };

    default:
      return state;
  }
};

export default carrinhoReducer;
