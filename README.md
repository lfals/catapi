<p align="center">
 <h1>CatApi</h1>
</p>


This is a API that *(will)* give you the main information about cat breeds, like name of the breed it self, popular name, max-age, fur color and more.

# Routes

The main route for the api is https://catapi-eight.vercel.app/api

## Cats - [/cats](https://catapi-eight.vercel.app/api/cats)
The cats route, give you all the breed of the database, including their description.

```json

{
    "id": "ae0e71b7-45d8-47da-b13b-26f4fb87039b",
    "breed": "pelo curto brasileiro",
    "name": "Vira Lata",
    "origin": "Brasil",
    "fur": "Curta, sedosa, bem fechada, deitada junto ao corpo. Sem subpelo .",
    "description": "O gato de pelo curto brasileiro..."
  },
  {
    "id": "f1e61d8c-f81b-468f-b569-e9be0688acba",
    "breed": "Sphynx",
    "name": "Gato Pelado",
  
```

## Breeds - [/cats/breeds](https://catapi-eight.vercel.app/api/cats/breeds)
The breeds route, give you just the breeds of the database

```json
[
  "pelo curto brasileiro",
  "Sphynx"
]
```

## Breed -  [/cats/breeds/:breedName](https://catapi-eight.vercel.app/api/cats/breeds/Sphynx)
The breed route give you just the breed passed on with the rout it self

```json
[
  {
    "id": "f1e61d8c-f81b-468f-b569-e9be0688acba",
    "breed": "Sphynx",
    "name": "Gato Pelado",
    "origin": "Canadá",
    "fur": "Sem pelagem",
    "description": "Sphynx, ou gato pelado canadense, é uma raça de gatos originária do Canadá, e que é conhecida por não possuir pelos.[1][2] O gene responsável pela sua nudez é a alopécia hereditária e é recessivo."
  }
]
```

# Works to do *"Roadmap"*
- Make filter routes for origin, fur type, name and/or if
- Treat the :breedName from the Breed url
- Find a way to populate easily the database - *there is more than 50 breeds of cats to add* 

But mainly that is it, fill free to use and give help 🌵


