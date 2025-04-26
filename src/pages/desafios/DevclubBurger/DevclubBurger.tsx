import { Container, ContainerButton, Button, ContainerResult, BurgerCard, BurgerImage, ResultReduce, ContainerDiscounts, SmallButton } from './DevclubBurger.style';
import { useState } from 'react';

//map - 10% de desconto
//reduce - valor total dos pedidos
//filter - pedidos veganos

const burgerList = [

  { name: 'X-Salada', price: 30, vegan: false, src: '/assets/devburger/xsalada.jpeg' },

  { name: 'Big Vegano', price: 55, vegan: true, src: './assets/devburger/big-vegano.jpg' },

  { name: 'X-Bacon', price: 34, vegan: false, src: '/assets/devburger/xbacon.png' },

  { name: 'X-Bacon Egg', price: 39, vegan: false, src: '/assets/devburger/bacon-egg.png' },

  { name: 'Monstruoso', price: 50, vegan: false, src: '/assets/devburger/monstruoso.png' },

  { name: 'X-Vegan', price: 45, vegan: true, src: '/assets/devburger/xvegan.png' },
]

type Burger = {
  name: string;
  price: number;
  vegan: boolean;
  src: string;
}

function Home() {
  const [burger, setBurger] = useState<Burger[]>(burgerList);
  const [newBurger, setNewBurger] = useState<Burger[]>(burgerList);
  const [total, setTotal] = useState<number>(0);
  const [showCards, setShowCards] = useState<boolean>(true);

  const handleViewAll = () => {
    setBurger(burgerList);
    setNewBurger(burgerList);
    setShowCards(true);
  }


  const handleMap = (discountValue: number) => {
    const newBurger = burger.map((item) => {
      return {
        ...item,
        price: item.price * (1 - discountValue / 100),
      }
    })
    setNewBurger(newBurger);
  }


  const handleReduce = () => {
    const total = burger.reduce((acc, item) => {
      return acc + item.price
    }, 0)

    setTotal(total);
    setShowCards(false); // Esconde os cards
  }

  const handleFilter = () => {
    const vegan = burger.filter((item) => {
      return item.vegan === true
    })
    setNewBurger(vegan);
  }

  return (
    <Container>

      <ContainerButton>
        <Button onClick={handleViewAll}>Ver todos</Button>
        <Button onClick={handleReduce}>Somar tudo <span>Reduce</span></Button>
        <Button onClick={handleFilter}>Filtrar / veganos <span>Filter</span></Button>

        <ContainerDiscounts >
          <h3 >Descontos com Map</h3>
          <div>
            <SmallButton onClick={() => handleMap(5)}>5%</SmallButton>
            <SmallButton onClick={() => handleMap(10)}>10%</SmallButton>
            <SmallButton onClick={() => handleMap(15)}>15%</SmallButton>
          </div>
        </ContainerDiscounts>
      </ContainerButton>

      <ContainerResult>
        {showCards && newBurger.map((item) => { // Renderiza os cards apenas se showCards for true
          return (
            <BurgerCard key={item.name}>
              <BurgerImage src={item.src} alt={item.name} />
              <h2>{item.name}</h2>
              <h2>R$ {item.price.toFixed(2)}</h2>
            </BurgerCard>
          )
        })}

        <ResultReduce>
          {!showCards && <h2>Soma de todos os itens: R$ {total.toFixed(2)}</h2>}
        </ResultReduce>

      </ContainerResult>
    </Container>
  );
}
export default Home;
