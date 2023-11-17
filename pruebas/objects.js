const persona = {
    name: 'Dani',
    walk: function () {
      console.log('Estoy caminando')
    }
  }
  
  persona.walk() // -> Estoy caminando
  
  let method = 'walk'
  persona[method]() // -> Estoy caminando

  const persona2 = { name: 'Dani', age: 18 }

delete persona2.age

console.log(persona2) // -> { name: 'Dani' }

const spiderman = {
    name: 'Spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense'],
    partner: {
      name: 'Mary Jane',
      universe: 42,
      powers: ['red hair', 'blue eyes']
    }
  }
  
  console.log(spiderman['name']) // Spidey
  console.log(spiderman.name) // Spidey

  const { universe: universeNumber } = spiderman
console.log(universeNumber) // 42

const { partner: { name } } = spiderman
    console.log(name) // 'Mary Jane'

    const spiderman3 = {
        name: 'Spidey',
        universe: 42,
        powers: ['web', 'invisibility', 'spider-sense']
      }
      
      for (const property in spiderman3) {
        console.log(`${property}: ${spiderman3[property]}`);
      }
      
      // -> name: Spidey
      // -> universe: 42
      // -> powers: web,invisibility,spider-sense
      const values = Object.values(spiderman)

      values.forEach(value => {
        console.log(value)
      })
      
      // -> Spidey
      // -> 42
      // -> [ 'web', 'invisibility', 'spider-sense' ]
      const entries = Object.entries(spiderman)

      entries.forEach(entry => {
        const property = entry[0]
        const value = entry[1]
      
        console.log(`${property}: ${value}`)
      })

      const user = {
        name: 'Peter',
        settings: {
          theme: 'dark',
          notifications: {
            email: true,
            push: false,
            marketing: undefined
          }
        }
      }
      
      // la forma clásica de acceder a una propiedad anidada
      // de forma segura
      let email2 = undefined
      if (user && user.settings &&
        user.settings.notifications &&
        user.settings.notifications.email) {
        email2 = user.settings.notifications.email
      }
      
      console.log(email2) // -> true
      
      // con Optional Chaining Operator
      const email = user?.settings?.notifications?.email
      console.log(email) // -> true