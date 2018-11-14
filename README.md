# Recjs

- Recomendar algum item a partir de amigos.

## Para come�ar

Deve ter `usuarios`, `itens` e `interacao`

### usuarios

Obrigat�rio: `id`

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
    nome: 'jo�o'
  },
  {

    id: 4,
    nome: 'igu'
  }
];
```

### itens

Obrigat�rio: `id`

```javascript
var itens = [
  {
    id: 1,
    nome: 'Boku no hero'
  }
];
```

### interacao

Obrigat�rio: `usuario` e `item`

#### usuario

`value`: Passar o id do usuario

`reference`: Passar a vari�vel dos usuarios

#### item

`value`: Passar o id do item

`reference`: Passar a vari�vel dos itens

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

### Depois � preciso dar new Recjs

```javascript
var recjs = new Recjs(usuarios, itens, interacao);
var viniciusM = recjs.getAllUsuarios()[0]; // Para buscar viniciusM
var recomendados = recjs.recomendarPara(viniciusM);

console.log(recomendados);
```