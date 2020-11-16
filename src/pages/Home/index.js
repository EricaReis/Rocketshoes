import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-fluidstreet-masculino/72/NQQ-4629-172/NQQ-4629-172_zoom2.jpg?ims=326x" alt="Tênis"/>
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/>
          </div>
          <span>ADICIONAR AO CARRINHO</span>

        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-fluidstreet-masculino/72/NQQ-4629-172/NQQ-4629-172_zoom2.jpg?ims=326x" alt="Tênis"/>
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/>
          </div>
          <span>ADICIONAR AO CARRINHO</span>

        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-fluidstreet-masculino/72/NQQ-4629-172/NQQ-4629-172_zoom2.jpg?ims=326x" alt="Tênis"/>
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/>
          </div>
          <span>ADICIONAR AO CARRINHO</span>

        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-fluidstreet-masculino/72/NQQ-4629-172/NQQ-4629-172_zoom2.jpg?ims=326x" alt="Tênis"/>
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/>
          </div>
          <span>ADICIONAR AO CARRINHO</span>

        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-fluidstreet-masculino/72/NQQ-4629-172/NQQ-4629-172_zoom2.jpg?ims=326x" alt="Tênis"/>
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/>
          </div>
          <span>ADICIONAR AO CARRINHO</span>

        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-fluidstreet-masculino/72/NQQ-4629-172/NQQ-4629-172_zoom2.jpg?ims=326x" alt="Tênis"/>
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/>
          </div>
          <span>ADICIONAR AO CARRINHO</span>

        </button>
      </li>
    </ProductList>
  );
}

export default Home;