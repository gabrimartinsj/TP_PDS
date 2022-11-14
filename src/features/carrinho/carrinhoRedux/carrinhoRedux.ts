import { AnyAction } from "redux";
import { Loja } from "../../../@types/entities/Loja";
import { Usuario } from "../../../@types/entities/Usuario";
import { Cart, CartItem } from "../../../@types/app/carrinhoTypes";
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
    itens: [],
    totalBruto: 0,
    desconto: 0,
    servicos: 0,
    frete: 0,
    total: 0,
  },
};

type Totals = {
  totalBruto: number;
  frete: number;
  servicos: number;
  desconto: number;
  total: number;
};

function calculateDiscountReduction(price: number, discount: number): number {
  return (price * Math.round(discount)) / 100;
}

function calculateTotal(itens: CartItem[]) {
  return itens.reduce(
    (previous, current) => previous + current.preco * current.quantidade,
    0
  );
}

function calculateTotalDiscount(itens: CartItem[]) {
  return itens.reduce((previous, current) => {
    return (
      previous +
      calculateDiscountReduction(
        current.preco * current.quantidade,
        current.desconto
      )
    );
  }, 0);
}

function calculateFrete(): number {
  return 0;
}

function calculateServices(): number {
  return 0;
}

function calculateTotals(itens: CartItem[]): Totals {
  const totalBruto = calculateTotal(itens);
  const totalDesconto = calculateTotalDiscount(itens);
  return {
    totalBruto: totalBruto,
    frete: calculateFrete(),
    servicos: calculateServices(),
    desconto: totalDesconto,
    total: totalBruto - totalDesconto,
  };
}

function assignTotalsToCart(cart: Cart, totals: Totals) {
  cart.desconto = totals.desconto;
  cart.frete = totals.frete;
  cart.servicos = totals.frete;
  cart.total = totals.total;
  cart.totalBruto = totals.totalBruto;
}

const carrinhoReducer = (state = carrinhoInitialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case CarrinhoActionTypes.ADD_ITEM: {
      let novoCarrinho: Cart = { ...state.carrinho };
      const itemIndex = novoCarrinho.itens.findIndex(
        (value) => value.id == payload.id
      );
      if (itemIndex != -1) {
        novoCarrinho.itens[itemIndex].quantidade++;
      } else {
        novoCarrinho.itens.push(payload);
      }
      assignTotalsToCart(novoCarrinho, calculateTotals(novoCarrinho.itens));

      return {
        ...state,
        isFetching: false,
        error: null,
        carrinho: novoCarrinho,
      };
    }
    case CarrinhoActionTypes.REMOVE_ITEM: {
      let novoCarrinho: Cart = { ...state.carrinho };
      const itemIndex = novoCarrinho.itens.findIndex(
        (value) => value.id == payload
      );
      if (itemIndex != -1 && novoCarrinho.itens[itemIndex].quantidade >= 1) {
        novoCarrinho.itens[itemIndex].quantidade--;
        assignTotalsToCart(novoCarrinho, calculateTotals(novoCarrinho.itens));
      }

      return {
        ...state,
        isFetching: false,
        error: null,
        carrinho: {
          ...novoCarrinho,
          itens: novoCarrinho.itens.filter(
            (item: { quantidade: number }) => item.quantidade > 0
          ),
        },
      };
    }
    case CarrinhoActionTypes.LIMPAR_CARRINHO:
      return carrinhoInitialState;
    default:
      return state;
  }
};

export default carrinhoReducer;
