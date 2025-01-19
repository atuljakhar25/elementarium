import { createApp, reactive } from 'vue'


class App {
  static scope = reactive({
    search: '',
    idSelectedChemical: 0,
    chemical: {
      idChemical: 1,
      idFamily: 0,
      symbol: '...',
      latinName: '...',
      name: '...',
      mass: '...',
      density: '...',
      melt: '...',
      boil: '...',
      phase: '...',
      category: '...',
      appearance: '...',
      year: '...',
      discoverer: '...',
      summary: '...',
      source: '...'
    },
  })

  static chemicals = [
    [  1, 0, 'H',  'Hydrogenium', 'Hydrogen'],
    [  2, 1, 'He', 'Helium', 'Helium'],
    [  3, 2, 'Li', 'Lithium', 'Lithium'],
    [  4, 3, 'Be', 'Beryllium', 'Beryllium'],
    [  5, 4, 'B',  'Borum', 'Boron'],
    [  6, 5, 'C',  'Carboneum', 'Carbon'],
    [  7, 5, 'N',  'Nitrogenium', 'Nitrogen'],
    [  8, 5, 'O',  'Oxygenium', 'Oxygen'],
    [  9, 5, 'F',  'Fluorum', 'Fluorine'],
    [ 10, 1, 'Ne', 'Neon', 'Neon'],
    [ 11, 2, 'Na', 'Natrium', 'Sodium'],
    [ 12, 3, 'Mg', 'Magnesium', 'Magnesium'],
    [ 13, 6, 'Al', 'Aluminium', 'Aluminium'],
    [ 14, 4, 'Si', 'Silicium', 'Silicon'],
    [ 15, 5, 'P',  'Phosphorus', 'Phosphorus'],
    [ 16, 5, 'S',  'Sulphur', 'Sulfur'],
    [ 17, 5, 'Cl', 'Chlorum', 'Chlorine'],
    [ 18, 1, 'Ar', 'Argon', 'Argon'],
    [ 19, 2, 'K',  'Kalium', 'Potassium'],
    [ 20, 3, 'Ca', 'Calcium', 'Calcium'],
    [ 21, 7, 'Sc', 'Scandium', 'Scandium'],
    [ 22, 7, 'Ti', 'Titanium', 'Titanium'],
    [ 23, 7, 'V',  'Vanadium', 'Vanadium'],
    [ 24, 7, 'Cr', 'Chromium', 'Chromium'],
    [ 25, 7, 'Mn', 'Manganum', 'Manganese'],
    [ 26, 7, 'Fe', 'Ferrum', 'Iron'],
    [ 27, 7, 'Co', 'Cobaltum', 'Cobalt'],
    [ 28, 7, 'Ni', 'Niccolum', 'Nickel'],
    [ 29, 7, 'Cu', 'Cuprum', 'Copper'],
    [ 30, 7, 'Zn', 'Zincum', 'Zinc'],
    [ 31, 6, 'Ga', 'Gallium', 'Gallium'],
    [ 32, 4, 'Ge', 'Germanium', 'Germanium'],
    [ 33, 4, 'As', 'Arsenicum', 'Arsenic'],
    [ 34, 5, 'Se', 'Selenium', 'Selenium'],
    [ 35, 5, 'Br', 'Bromum', 'Bromine'],
    [ 36, 1, 'Kr', 'Krypton', 'Krypton'],
    [ 37, 2, 'Rb', 'Rubidium', 'Rubidium'],
    [ 38, 3, 'Sr', 'Strontium', 'Strontium'],
    [ 39, 7, 'Y',  'Yttrium', 'Yttrium'],
    [ 40, 7, 'Zr', 'Zirconium', 'Zirconium'],
    [ 41, 7, 'Nb', 'Niobium', 'Niobium'],
    [ 42, 7, 'Mo', 'Molybdaenum', 'Molybdenum'],
    [ 43, 7, 'Tc', 'Technetium', 'Technetium'],
    [ 44, 7, 'Ru', 'Ruthenium', 'Ruthenium'],
    [ 45, 7, 'Rh', 'Rhodium', 'Rhodium'],
    [ 46, 7, 'Pd', 'Palladium', 'Palladium'],
    [ 47, 7, 'Ag', 'Argentum', 'Silver'],
    [ 48, 7, 'Cd', 'Cadmium', 'Cadmium'],
    [ 49, 6, 'In', 'Indium', 'Indium'],
    [ 50, 6, 'Sn', 'Stannum', 'Tin'],
    [ 51, 4, 'Sb', 'Stibium', 'Antimony'],
    [ 52, 4, 'Te', 'Tellurium', 'Tellurium'],
    [ 53, 5, 'I',  'Iodium', 'Iodine'],
    [ 54, 1, 'Xe', 'Xenon', 'Xenon'],
    [ 55, 2, 'Cs', 'Caesium', 'Cesium'],
    [ 56, 3, 'Ba', 'Barium', 'Barium'],
    [ 57, 8, 'La', 'Lanthanum', 'Lanthanum'],
    [ 58, 8, 'Ce', 'Cerium', 'Cerium'],
    [ 59, 8, 'Pr', 'Praseodymium', 'Praseodymium'],
    [ 60, 8, 'Nd', 'Neodymium', 'Neodymium'],
    [ 61, 8, 'Pm', 'Promethium', 'Promethium'],
    [ 62, 8, 'Sm', 'Samarium', 'Samarium'],
    [ 63, 8, 'Eu', 'Europium', 'Europium'],
    [ 64, 8, 'Gd', 'Gadolinium', 'Gadolinium'],
    [ 65, 8, 'Tb', 'Terbium', 'Terbium'],
    [ 66, 8, 'Dy', 'Dysprosium', 'Dysprosium'],
    [ 67, 8, 'Ho', 'Holmium', 'Holmium'],
    [ 68, 8, 'Er', 'Erbium', 'Erbium'],
    [ 69, 8, 'Tm', 'Thulium', 'Thulium'],
    [ 70, 8, 'Yb', 'Ytterbium', 'Ytterbium'],
    [ 71, 8, 'Lu', 'Lutetium', 'Lutetium'],
    [ 72, 7, 'Hf', 'Hafnium', 'Hafnium'],
    [ 73, 7, 'Ta', 'Tantalum', 'Tantalum'],
    [ 74, 7, 'W',  'Wolframium', 'Tungsten'],
    [ 75, 7, 'Re', 'Rhenium', 'Rhenium'],
    [ 76, 7, 'Os', 'Osmium', 'Osmium'],
    [ 77, 7, 'Ir', 'Iridium', 'Iridium'],
    [ 78, 7, 'Pt', 'Platinum', 'Platinum'],
    [ 79, 7, 'Au', 'Aurum', 'Gold'],
    [ 80, 7, 'Hg', 'Hydrargyrum', 'Mercury'],
    [ 81, 6, 'Tl', 'Thallium', 'Thallium'],
    [ 82, 6, 'Pb', 'Plumbum', 'Lead'],
    [ 83, 6, 'Bi', 'Bismuthum', 'Bismuth'],
    [ 84, 6, 'Po', 'Polonium', 'Polonium'],
    [ 85, 4, 'At', 'Astatum', 'Astatine'],
    [ 86, 1, 'Rn', 'Radon', 'Radon'],
    [ 87, 2, 'Fr', 'Francium', 'Francium'],
    [ 88, 3, 'Ra', 'Radium', 'Radium'],
    [ 89, 9, 'Ac', 'Actinium', 'Actinium'],
    [ 90, 9, 'Th', 'Thorium', 'Thorium'],
    [ 91, 9, 'Pa', 'Protactinium', 'Protactinium'],
    [ 92, 9, 'U',  'Uranium', 'Uranium'],
    [ 93, 9, 'Np', 'Neptunium', 'Neptunium'],
    [ 94, 9, 'Pu', 'Plutonium', 'Plutonium'],
    [ 95, 9, 'Am', 'Americium', 'Americium'],
    [ 96, 9, 'Cm', 'Curium', 'Curium'],
    [ 97, 9, 'Bk', 'Berkelium', 'Berkelium'],
    [ 98, 9, 'Cf', 'Californium', 'Californium'],
    [ 99, 9, 'Es', 'Einsteinium', 'Einsteinium'],
    [100, 9, 'Fm', 'Fermium', 'Fermium'],
    [101, 9, 'Md', 'Mendelevium', 'Mendelevium'],
    [102, 9, 'No', 'Nobelium', 'Nobelium'],
    [103, 9, 'Lr', 'Lawrencium', 'Lawrencium'],
    [104, 7, 'Rf', 'Rutherfordium', 'Rutherfordium'],
    [105, 7, 'Db', 'Dubnium', 'Dubnium'],
    [106, 7, 'Sg', 'Seaborgium', 'Seaborgium'],
    [107, 7, 'Bh', 'Bohrium', 'Bohrium'],
    [108, 7, 'Hs', 'Hassium', 'Hassium'],
    [109, 7, 'Mt', 'Meitnerium', 'Meitnerium'],
    [110, 7, 'Ds', 'Darmstadtium', 'Darmstadtium'],
    [111, 7, 'Rg', 'Roentgenium', 'Roentgenium'],
    [112, 7, 'Cn', 'Copernicium', 'Copernicium'],
    [113, 6, 'Nh', 'Nihonium', 'Nihonium'],
    [114, 6, 'Fl', 'Flerovium', 'Flerovium'],
    [115, 6, 'Mc', 'Moscovium', 'Moscovium'],
    [116, 6, 'Lv', 'Livermorium', 'Livermorium'],
    [117, 6, 'Ts', 'Tennessine', 'Tennessine'],
    [118, 1, 'Og', 'Oganesson', 'Oganesson'],
  ]

  static chemicalsInfo = {
    head: [],
    body: [],
  }

  static async onMounted() {
    const response = await fetch('data/chemicals.csv')
    const data = await response.text()
    const [head, ...body] = data.split('\n').map((d) => d.split(';'))

    this.chemicalsInfo = { head, body }

    this.setChemical(this.chemicals[0])
  }

  static getChemicalInfo(id) {
    const chemical = this.chemicals[id]

    let data = {
      idChemical: chemical[0],
      idFamily: chemical[1],
      symbol: chemical[2],
      latinName: chemical[3],
      name: chemical[4],
    }

    for (const [i, key] of this.chemicalsInfo.head.entries())
      data[key] = this.chemicalsInfo.body[id][i]

    return data
  }

  static get chemicalPointerStyle() {
    const color = [
      'white-text',
      'indigo-text',
      'red-text',
      'orange-text',
      'teal-text',
      'blue-text',
      'green-text',
      'yellow-text',
      'pink-text',
      'purple-text',
    ][this.scope.chemical.idFamily]

    return {
      class: [
        'absolute',
        'rotate',
        color
      ],
      style: {
        'grid-area': this.scope.chemical.symbol,
      },
    }
  }

  static get orbitals() {
    const orbitals = new Array(7)
      .fill()
      .map((_, x) => {
        const length = 4.5 - Math.abs(x - 3.5)

        return new Array(length)
          .fill()
          .map((_, y) => new Array(y * 2 + 1).fill(0))
      })

    let remaining = this.scope.chemical.idChemical
    for (let layer = 0, sublevel = 0; remaining > 0; layer++, sublevel--) {
      const size = sublevel * 2 + 1
      let decay = Math.min(remaining, size * 2)

      if (remaining === decay) {
        console.log(true,decay, layer, sublevel)
        console.log(decay % size, sublevel - 1)

        if (sublevel === 2 && size - decay % size === 1) {
          orbitals[layer + 1][0][0]--
          decay++
        }
        if (layer === 3 && sublevel === 3 && decay < 3) {
          decay--
        }
        if (layer === 4 && sublevel === 3 && decay < 6) {
          decay--
        }
      }

      const spins = new Array(size).fill().map((_, i) => Math.ceil((decay - i) / size))

      orbitals[layer][sublevel] = spins
      remaining -= decay

      if (sublevel === 0) {
          sublevel = Math.floor((layer + 1) / 2) + 1
          layer -= sublevel - 1
      }
    }

    return orbitals
  }

  static get orbitalsDisplay() {
    const orbitals = this.orbitals.map((l) => l.map((s) => s.reduce((acc, curr) => acc + curr, 0)))

    let layer
    for (layer = 0; layer < 6; layer++)
      if (orbitals[layer + 1][0] === 0) break

    if (layer === 0) {
      if (orbitals[0][0] === 1) return '1s1'
      else if (orbitals[0][0] === 2) return '1s2'
    }
    else if (orbitals[layer].reduce((acc, curr) => acc + curr, 0) === 8) {
      return `[${this.scope.chemical.symbol}]`
    }

    const base = ['H', 'He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn'][layer]
    const sublevels = ['s', 'p', 'd', 'f']
    const orbits = []

    for (let sublevel = 0; layer < 7 && sublevel < 4; layer++, sublevel--) {
        const value = orbitals[layer][sublevel]

        if (value === undefined || value == 0) continue

        orbits.push([layer + 1, sublevels[sublevel], value])

        if (sublevel === 0) {
            sublevel = Math.floor((layer + 1) / 2) + 1
            layer -= sublevel - 1
        }
    }

    const text = orbits.map((l) => l.join('')).join(' ')

    return `[${base}] ${text}`
  }

  static get shells() {
    return this.orbitals.map((layer) => {
      const orbits = layer.flat()

      orbits.unshift(orbits.reduce((acc, cur) => acc + (cur > 0 ? 1 : 0), 0))

      return orbits
    })
  }

  static openSearchDialog() {
    document.getElementById('search-dialog').showModal()
    document.getElementById('overlay').classList.add('active')

    setTimeout(() => {
      document.getElementById('search-bar').focus()
      document.getElementById('search-bar').select()
    }, 500)

    document.getElementById('search-dialog').addEventListener('close', () => {
      document.getElementById('overlay').classList.remove('active')
    }, {
      once: true,
    })
  }

  static closeSearchDialog() {
    document.getElementById('search-dialog').close()
  }

  static getFamilyColor(idFamily) {
    return [
      'white',
      'indigo white-text',
      'red',
      'orange',
      'teal white-text',
      'blue',
      'green',
      'yellow',
      'pink white-text',
      'purple white-text',
    ][idFamily]
  }

  static matchChemicalSearch(chemical) {
    if (this.scope.search.length === 0) return true

    const [idChemical, idFamily, symbol, latinName, name] = chemical
    const attributes = [idChemical.toString(), symbol, latinName, name]
    const search = this.scope.search.toLowerCase()

    return attributes.some((attr) => attr.toLowerCase().startsWith(search))
  }

  static clearSearch() {
    this.scope.search = ''

    document.getElementById('search-bar').focus()
  }

  static setChemical(chemical) {
    const update = () => {
      const atomOrbitals = document.getElementById('atom-orbitals')

      this.scope.idSelectedChemical = chemical[0] - 1
      this.scope.chemical = this.getChemicalInfo(this.scope.idSelectedChemical)
      atomOrbitals.$scope.shells = this.shells
    }

    if (!document.startViewTransition) {
      update()
      return
    }

    document.startViewTransition(() => update());
  }

  static setChemicalById(id) {
    const nextChemical = this.chemicals[id]
    const idFamily = nextChemical[1]
    const element = document.createElement('div')
    const className = this.getFamilyColor(idFamily).split(' ')[0]
    const atomOrbitals = document.getElementById('atom-orbitals')

    element.classList.add(className)
    document.body.appendChild(element)

    const color = getComputedStyle(element).getPropertyValue('background-color')
    atomOrbitals.$scope.primaryColor = color

    element.remove()
    this.setChemical(nextChemical)
  }

  static setPrevChemical() {
    this.setChemicalById(this.scope.idSelectedChemical - 1)
  }

  static setNextChemical() {
    this.setChemicalById(this.scope.idSelectedChemical + 1)
  }

  static getChemicalBind(chemical, element) {
    const [idChemical, idFamily, symbol, latinName, name] = chemical
    const match = this.matchChemicalSearch(chemical)

    return {
      style: {
        gridArea: symbol,
        borderRadius: idChemical - 1 === this.scope.idSelectedChemical ? '50%' : '30%',
      },
      class: {
        'circle': true,
        'large': true,
        'bold': true,
        'large-opacity': !match,
        [this.getFamilyColor(idFamily)]: true,
      },
      onclick: () => {
        const color = getComputedStyle(element).getPropertyValue('background-color')
        const atomOrbitals = document.getElementById('atom-orbitals')

        atomOrbitals.$scope.primaryColor = color

        this.setChemical(chemical)
        this.closeSearchDialog()
      }
    }
  }
}


class AtomOrbitals extends HTMLCanvasElement {
  #frameRequest = null

  $scope = {
    time: 0,
    size: 0,
    primaryColor: '#FFF',
    strokeColor: '#DDD',
    shells: [],
  }

  constructor () {
    super()
    this.#setup()
    this.#loop()
  }

  draw () {
    const { size, primaryColor, strokeColor, shells, time } = this.$scope
    const minOrbitRadius = size / 3
    const orbitLineWidth = size / 2**7
    const electronRadius = size / 30
    const electronClearRadius = electronRadius * 2
    const nucleusRadius = size / 6
    const originX = this.width / 2
    const originY = this.height / 2
    const alpha = 2 * Math.PI

    // Start
    this.ctx2D.save()
    this.ctx2D.fillStyle = primaryColor
    this.ctx2D.strokeStyle = strokeColor
    this.ctx2D.lineWidth = orbitLineWidth
    this.ctx2D.lineCap = 'round'

    // Layers
    shells.forEach((layer, i) => {
      const [length, ...electrons] = layer
      const radius = i / (shells.length - 1) * (size - minOrbitRadius) + minOrbitRadius
      const layerRotation = time * (7 - i)

      // Draws empty layers line
      if (length === 0) {
        this.ctx2D.globalAlpha *= .5

        this.ctx2D.beginPath()
        this.ctx2D.arc(originX, originY, radius, 0, alpha)
        this.ctx2D.stroke()

        return
      }

      if (this.ctx2D.globalAlpha < 1)
        this.ctx2D.globalAlpha = 1

      for (let j = 0; j < length; j++) {
        const phi1 = j / length * alpha + layerRotation
        const phi2 = phi1 + 1 / length * alpha
        const orbitalSpacing = electronClearRadius / radius

        // Draws layer lines between electrons
        if (phi2 - phi1 - 2*orbitalSpacing > 0) {
          let spacing1 = orbitalSpacing
          let spacing2 = orbitalSpacing

          this.ctx2D.beginPath()

          if (electrons[j] === 2) {
            spacing1 *= 3 / 2
          }

          if (electrons[(j + 1) % length] === 2) {
            spacing2 *= 3 / 2
          }

          this.ctx2D.arc(originX, originY, radius, phi1 + spacing1, phi2 - spacing2)
          this.ctx2D.stroke()
        }

        // Draws Electrons
        this.ctx2D.beginPath()

        if (electrons[j] === 1) {
          const posX = originX + radius * Math.cos(phi1)
          const posY = originY + radius * Math.sin(phi1)

          this.ctx2D.arc(posX, posY, electronRadius, 0, alpha)
        }
        else {
          const posX1 = originX + radius * Math.cos(phi1 + orbitalSpacing * 3 / 5)
          const posY1 = originY + radius * Math.sin(phi1 + orbitalSpacing * 3 / 5)
          const posX2 = originX + radius * Math.cos(phi1 - orbitalSpacing * 3 / 5)
          const posY2 = originY + radius * Math.sin(phi1 - orbitalSpacing * 3 / 5)

          this.ctx2D.arc(posX1, posY1, electronRadius, 0, alpha)
          this.ctx2D.arc(posX2, posY2, electronRadius, 0, alpha)
        }

        this.ctx2D.fill()
      }
    })

    if (this.ctx2D.globalAlpha < 1)
      this.ctx2D.globalAlpha = 1

    // Draws nucleus
    this.ctx2D.beginPath()
    this.ctx2D.arc(originX, originY, nucleusRadius, 0, alpha)
    this.ctx2D.fill()

    // End
    this.ctx2D.restore()
  }

  loop () {
    this.$scope.time = (this.$scope.time + 2**-9) % (2*Math.PI)
  }

  #setup () {
    this.ctx2D = this.getContext('2d')

    this.#updateSize()
    window.addEventListener('resize', () => this.#updateSize())
  }

  #updateSize () {
    this.height = this.width = parseInt(getComputedStyle(this.parentElement).width)
    this.$scope.size = this.width * 10/21
  }

  #clear () {
    return this.ctx2D.clearRect(0, 0, this.width, this.height)
  }

  #loop () {
    this.#clear()
    this.draw()
    this.loop()

    this.#frameRequest = requestAnimationFrame(() => this.#loop())
  }
}


createApp(App).mount('body')
window.customElements.define('atom-orbitals', AtomOrbitals, {extends: 'canvas'})
