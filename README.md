# Recjs

- Recomendar algum item a partir de amigos.

## Para começar

Deve ter `usuarios`, `itens` e `interacao`

### usuarios

Obrigatório: `id`

Opcional: `amigos` (para recomendar a partir de amigos)

```javascript
var usuarios = [
  {
    id: 1,
    nome: 'viniciusM',
    amigos: [2, 4]
  },
  {
    id: 2,
    nome: 'behling'
  },
  {

    id: 3,
    nome: 'joão'
  },
  {

    id: 4,
    nome: 'igu'
  }
];
```

### itens

Obrigatório: `id`

```javascript
var itens = [
  {
    id: 1,
    nome: 'Boku no hero'
  }
];
```

### interacao

Obrigatório: `usuario` e `item`

#### usuario

`value`: Passar o id do usuario

`reference`: Passar a variável dos usuarios

#### item

`value`: Passar o id do item

`reference`: Passar a variável dos itens

```javascript
var interacao = [
  {
    usuario: { value: 2, reference: 'usuarios' },
    item: { value: 1, reference: 'itens' }
  },
  {
    usuario: { value: 4, reference: 'usuarios' },
    item: { value: 1, reference: 'itens' }
  },
  {
    usuario: { value: 3, reference: 'usuarios' },
    item: { value: 1, reference: 'itens' }
  }
];
```

### Depois é preciso dar new Recjs

```javascript
var recjs = new Recjs(usuarios, itens, interacao);
var viniciusM = recjs.getAllUsuarios()[0]; // Para buscar viniciusM
var recomendados = recjs.recomendarPara(viniciusM);

console.log(recomendados);
```