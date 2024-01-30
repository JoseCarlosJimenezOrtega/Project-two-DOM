const products = [
  {
    id: 1,
    name: 'Airoh Negro',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'motocard',
    image: './assets/casco1.png'
  },

  {
    id: 2,
    name: 'SMK Gris',
    price: 250,
    stars: 2,
    reviews: 46,
    seller: 'motocard',
    image: './assets/casco2.png'
  },
  {
    id: 3,
    name: 'JOSE España',
    price: 956,
    stars: 5,
    reviews: 658,
    seller: 'Spain Helmet',
    image: './assets/casco3.png'
  },
  {
    id: 4,
    name: 'Rebeld Azul',
    price: 289,
    stars: 4,
    reviews: 50,
    seller: 'Spain Helmet',
    image: './assets/casco4.png'
  },
  {
    id: 5,
    name: 'Roan Multicolor',
    price: 750,
    stars: 4,
    reviews: 254,
    seller: 'Ropa Motor',
    image: './assets/casco5.png'
  },
  {
    id: 6,
    name: 'Gafa Rosa',
    price: 120,
    stars: 4,
    reviews: 248,
    seller: 'Ropa Motor',
    image: './assets/gafas1.png'
  },
  {
    id: 7,
    name: 'Gafa Amarilla',
    price: 54,
    stars: 1,
    reviews: 8,
    seller: 'GafasCross',
    image: './assets/gafas1.png'
  },
  {
    id: 8,
    name: 'Gafa Multicolor',
    price: 230,
    stars: 4,
    reviews: 564,
    seller: 'GafasCross',
    image: './assets/gafas2.png'
  },
  {
    id: 9,
    name: 'Gafa azul',
    price: 45,
    stars: 1,
    reviews: 2,
    seller: 'CrossGlasses',
    image: './assets/gafas4.png'
  },
  {
    id: 10,
    name: 'Gafa Azulona',
    price: 250,
    stars: 4,
    reviews: 326,
    seller: 'CrossGlasses',
    image: './assets/gafas5.png'
  }
  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
]

const sellers = []
const prices = []
let PRICE = ''
let SELLER = ''

const filtrar = () => {
  const filtrado = []

  for (const product of products) {
    if (SELLER === product.seller) {
      filtrado.push(product)
    }
  }

  printCascos(filtrado)
}

const filtrarPrice = (input) => {
  const filtro = []

  for (const product of products) {
    if (product.price <= input.value) {
      filtro.push(product)
      console.log(filtro)
    }
  }
  input.value = ''
  printCascos(filtro)
}

const soloPrices = (productos) => {
  for (const producto of productos) {
    if (!prices.includes(producto.price)) {
      prices.push(producto.price)
    }
  }
}

soloPrices(products)

const soloSellers = (productos) => {
  for (const producto of productos) {
    if (!sellers.includes(producto.seller)) {
      sellers.push(producto.seller)
    }
  }
}

soloSellers(products)
const button = document.createElement('button')
const crearInputPrice = () => {
  const divFilter = document.querySelector('.filter')
  const h2 = document.createElement('h2')
  const input = document.createElement('input')

  h2.textContent = 'Filtros'
  input.type = 'number'
  input.number = 0
  input.max = 2000
  input.step = 50
  button.textContent = 'Buscar'
  button2.textContent = 'Limpiar filtros'
  input.placeholder = 'Precio'
  button.addEventListener('click', () => filtrarPrice(input))

  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      filtrarPrice(input)
    }
  })

  divFilter.appendChild(h2)
  divFilter.appendChild(input)
  divFilter.appendChild(button)
  divFilter.appendChild(button2)
}
const button2 = document.createElement('button')
button2.addEventListener('click', () => printCascos(products))

const crearSelectSeller = () => {
  const divFilter = document.querySelector('.filter')

  const selectSeller = document.createElement('select')
  const title = document.createElement('option')
  title.textContent = 'Selecciona'
  title.disabled = false
  title.select = true
  selectSeller.appendChild(title)
  for (const seller of sellers) {
    const option = document.createElement('option')

    option.value = seller
    option.textContent = seller

    selectSeller.appendChild(option)
  }

  divFilter.appendChild(selectSeller)

  selectSeller.addEventListener('change', (e) => {
    SELLER = e.target.value
    filtrar()
  })
}

const printCascos = (cascos) => {
  const productos = document.querySelector('.products')
  productos.innerHTML = ''
  for (const casco of cascos) {
    const divCasco = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const nombre = document.createElement('h3')
    const precio = document.createElement('p')
    const reviuw = document.createElement('p')
    const seller = document.createElement('p')
    const divEstrella = document.createElement('div')
    img.className = 'image'

    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('div')
      estrella.className = 'estrella'
      if (casco.stars >= i) {
        estrella.classList.add('rellena')
      }
      divEstrella.appendChild(estrella)
    }

    divCasco.className = 'flex-contanier'
    divEstrella.classList.add('estrellas', 'flex-container')
    divImg.className = 'containerImg'
    img.src = casco.image
    nombre.textContent = casco.name
    precio.textContent = `${casco.price} €`
    seller.textContent = casco.seller
    reviuw.textContent = casco.reviews

    divCasco.appendChild(divImg)
    divImg.appendChild(img)
    divCasco.appendChild(nombre)
    divCasco.appendChild(precio)
    divCasco.appendChild(seller)
    divCasco.appendChild(reviuw)
    divCasco.appendChild(divEstrella)
    productos.appendChild(divCasco)
  }
}

printCascos(products)

crearInputPrice()
crearSelectSeller()

//  todo solo hay que enviarlo !!!!!!!!
