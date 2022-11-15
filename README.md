# Título
Trabalho Prático - Prática em Desenvolvimento de Software

## Grupo:
- Denilson Santos: Front-end
- Gabriel Cerqueira: Full Stack
- Gabriel Juarez: Back-end
- Giovanni Braga: Full Stack


# Marketplace de Lojas Virtuais

## Sobre o sistema
O sistema será mais do que apenas uma plataforma para criação de uma loja virtual, a proposta aqui é que o sistema sirva de plataforma para várias lojas virtuais, compartilhando de um mesmo carrinho durante a sessão do cliente. O sistema servirá para a inclusão de produtos dentre várias lojas e compartilhará funções necessárias para administração do marketplace (feature removida do projeto atual).

### Features
- Busca de lojas cadastradas no sistema
- Busca de produtos cadastrados no sistema
- Carrinho compartilhado entre lojas
- Navegação por coleções, categorias e segmentos

### Tecnologias
- Front-end: React
- Back-end: .Net
- Database: PostgreSQL

### Wireframe: [link aqui](https://www.figma.com/proto/Lhrwxzrhidbpt4GYjM428a/Marketplace?node-id=2%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3)


## Backlog: 

### Tarefas:
- Projeto Arquitetural: Modelagem Lógica de Dados (Gabriel J. e Gabriel C.)
- Projeto Arquitetural: Modelagem Física de Dados (Gabriel J.)
- Tarefa Técnica: Preparar ambiente de desenvolvimento .NET (Todos)
- Tarefa Técnica: Preparar ambiente de desenvolvimento React Native (Todos)
- Tarefa Técnica: Preparar ambiente de desenvolvimento PostgresSQL (Todos)
- Desenvolvimento: Implementar biblioteca de componentes (Giovanni)
- Desenvolvimento: Implementar o gerenciador de estados (Gabriel C.)
- Desenvolvimento: Implementação do DB (Gabriel J.)
- Desenvolvimento: Histórias de usuário (Todos)


### Histórias de usuário:

#### História 1:
> Como cliente, gostaria de realizar uma compra. (Visualizar produto, selecionar produto à sacola, finalizar compra sem check-out)

#### Tarefas da história:
- Banco de dados: criar tabelas relacionadas. (Gabriel J.)
- Back-end: desenvolver API para consulta e alimentação do banco de dados. (Giovanni e Gabriel J.)
- Front-end: desenvolver telas relacionadas. (Gabriel C. e Denilson)


#### História 2:
> Como cliente, gostaria de gerenciar meu carrinho. (Listar produtos no carrinho e adicionar/remover produto)

#### Tarefas da história:
- Banco de dados: criar tabelas relacionadas. (Gabriel J.)
- Back-end: desenvolver API para consulta e alimentação do banco de dados. (Giovanni e Gabriel J.)
- Front-end: desenvolver telas relacionadas. (Gabriel C. e Denilson)


#### História 3:
> Como cliente, gostaria de visualizar minha compra realizada. (Listar compras efetuadas e visualizar compra em específico)

#### Tarefas da história:
- Banco de dados: criar tabelas relacionadas. (Gabriel J.)
- Back-end: desenvolver API para consulta e alimentação do banco de dados. (Giovanni e Gabriel J.)
- Front-end: desenvolver telas relacionadas. (Gabriel C. e Denilson)


#### História 4:
> Como cliente, gostaria de visualizar todos os produtos de uma coleção ou por categoria. (Acessar coleção e/ou categoria e visualizar lista de produtos)

#### Tarefas da história:
- Banco de dados: criar tabelas relacionadas. (Gabriel J.)
- Back-end: desenvolver API para consulta e alimentação do banco de dados. (Giovanni e Gabriel J.)
- Front-end: desenvolver telas relacionadas. (Gabriel C. e Denilson)


#### História 5:
> Como cliente, gostaria de visualizar lojas organizadas por segmento. (Listar segmentos e visualizar lojas de um segmento)

#### Tarefas da história:
- Banco de dados: criar tabelas relacionadas. (Gabriel J.)
- Back-end: desenvolver API para consulta e alimentação do banco de dados. (Giovanni e Gabriel J.)
- Front-end: desenvolver telas relacionadas. (Gabriel C. e Denilson)


#### História 6:
> Como cliente, gostaria de recuperar dados pessoais de cadastro. (Acessar perfil e visualizar dados de cadastro)

#### Tarefas da história:
- Banco de dados: criar tabelas relacionadas. (Gabriel J.)
- Back-end: desenvolver API para consulta e alimentação do banco de dados. (Giovanni e Gabriel J.)
- Front-end: desenvolver telas relacionadas. (Gabriel C. e Denilson)


### Sprint 2:
- Projeto Arquitetural
- Tarefas Técnicas
- Desenvolvimento 


### Documentação da Arquitetura

#### Por que o sistema está implementado em uma arquitetura hexagonal?
Utilizamos uma arquitetura hexagonal pelos seguintes motivos:
  - Separar código de domínio de tecnologia;
  - Facilitação uma eventual troca de tecnologia;
  - Facilitação na realização de testes, uma vez que os adaptadores possam ser mockados;
  - Redução do acoplamento do código;

#### Quais são as portas e adaptadores? Qual o objetivo deles?
 
De maneira geral, os controladores (controllers), são responsáveis por receber as requisições do frontend. Focados principalmente em prover ao frontend as entidades necessárias. Os repositórios (repositories) são responsáveis por obter essas entidades do banco de dados, uma vez que possuem os métodos de acesso ao banco de dados. Uma estratégia adotada foi a criação de um repositório e um controlador para cada entidade, uma vez que todas as requisições necessitam obter dados do banco de dados.

Um exemplo de adaptadores e portas utilizados são os adaptadores relacionados à entidade de Categoria.

Inicialmente, é criada uma rota para categoria

```typescript
const categoriaRouter: Router = express.Router();

categoriaRouter.get("/getCategoria/:id", new categoriaController().getCategoria);
```

Após isso, é passado para o adaptador

```typescript
class CategoriaController {
    categoriaService: ICategoriaService;

  constructor() {
    this.categoriaService = new CategoriaService();
  }

  getCategoria = catchAsync(async (req: Request, res: Response, _next) => {
    const categoria = await this.categoriaService.getCategoria(parseInt(req.params.id));

    return sendResponse(res, 200, categoria);
  });
}
```

Que chama na camada de domínio

```typescript
interface ICategoriaService {
  getCategoria(id: number): Promise<Categoria>;
}
```

```typescript
export class CategoriaService implements ICategoriaService {
  categoriaRepository: CategoriaRepository;

  constructor() {
    this.categoriaRepository = new CategoriaRepository();
  }

  async getCategoria(id: number): Promise<Categoria> {
    return this.categoriaRepository.getCategoria(id);
  }
}
```

E a camada de domínio acaba por acessar o repositório

```typescript
interface ICategoriaRepository {
  getCategoria(id: number): Promise<Categoria>;
}
```

```typescript
class CategoriaRepository implements ICategoriaRepository {
  pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getCategoria(id: number) {
    const categoria: Categoria = (await pool.query(`select * from public2."CATEGORIA" where "ID_CATEGORIA" = $1`, [id])).rows as unknown as Categoria;

    return categoria;
  }
}
```

No caso as portas e adaptadores implementados são os seguintes:

  - CategoriaController -> ICategoriaController
  - ClienteController -> IClienteController
  - ColecaoController -> IColecaoController
  - CompraController -> ICompraController
  - LojaController -> ILojaController
  - MaketplaceController -> IMaketplaceController
  - ProdutoController -> IProdutoController
  - SegmentoController -> ISegmentoController
  - VendedorController -> IVendedorController
  - CategoriaRepository -> ICategoriaRepository
  - ClienteRepository -> IClienteRepository
  - ColecaoRepository -> IColecaoRepository
  - CompraRepository -> ICompraRepository
  - LojaRepository -> ILojaRepository
  - MarketplaceRepository -> IMarketplaceRepository
  - ProdutoRepository -> IProdutoRepository
  - SegmentoRepository -> ISegmentoRepository
  - VendedorRepository -> IVendedorRepository
 
