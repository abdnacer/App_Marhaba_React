const request = require('supertest')
const app = require('./server')

// Bloc de testing Login
describe('POST /api/auth/login', () => {
  let body = {
    email: "",
    password: ""
  }

  describe('check your email to active your account', () => {
    test('check your email to active your account', async () => {
      body = {
        email: "ziade@gmail.com",
        password: "123"
      }

      const response = await request(app).post('/api/auth/login').send(body)
      expect(response.statusCode).toBe(400)
    })
  })

  describe('Email or Password is incorrect', () => {
    test('Email or Password is incorrect', async () => {
      body = {
        email: "amineamine@gmail.com",
        password: "123"
      }

      const response = await request(app).post('/api/auth/login').send(body)
      expect(response.statusCode).toBe(400)
    })
  })

  describe('Please Fill All The Fiealds', () => {
    test('Please Fill All The Fiealds', async () => {
      body = {
        email: "",
        password: ""
      }

      const response = await request(app).post('/api/auth/login').send(body)
      expect(response.statusCode).toBe(400)
    })
  })
})

// Bloc de testing Register
describe('POST /api/auth/register', () => {
  let body = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  describe('Please fill all the fields', () => {
    test('Please fill all the fields', async() => {
      body = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
      }

      const response = await request(app).post('/api/auth/register').send(body)
      expect(response.statusCode).toBe(400)
    })
    
  })

  describe('User already Exists', () => {
    test('User already Exists', async () => {
      body = {
        first_name: "nasser",
        last_name: "sandali",
        email: "nasseressaouira@gmail.com",
        password: "123"
      }

      const response = await request(app).post('/api/auth/register').send(body)
      expect(response.statusCode).toBe(400)
    })
    
  })

  describe('Check Your Email', () => {
    test('Check Your Email', async () => {
      body = {
        email: "ziade@gmail.com",
        password: "123"
      }

      const response = await request(app).post('/api/auth/register').send(body)
      expect(response.statusCode).toBe(400)
    })
  })
})

// Bloc de testing Forgot Password
describe('POST /api/auth/forgot-password', () => {
  let body = {
    email: ""
  }

  describe('Enter Your Email', () => {
    test('Enter Your Email', async() => {
      body = {
        email: ""
      }

      const response = await request(app).post('/api/auth/forgot-password').send(body)
      expect(response.statusCode).toBe(400)
    })
    
  })  
})

// Bloc de testing Register Un Livreur
// describe('POST /api/auth/registerLivreur', () => {
//   let body = {
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: ""
//   }

//   describe('Please fill all the fields', () => {
//     test('Please fill all the fields', async () => {
//       body = {
//         first_name: "",
//         last_name: "",
//         email: "",
//         password: ""
//       }

//       const response = await request(app).post('/api/auth/registerLivreur').send(body)
//       expect(response.statusCode).toBe(400)
//     })
    
//   })

//   describe('User already Exists', () => {
//     test('User already Exists', async () => {
//       body = {
//         email: "nasseressaouira@gmail.com"
//       }

//       const response = await request(app).post('/api/auth/registerLivreur').send(body)
//       expect(response.statusCode).toBe(400)
//     })
    
//   }) 
// })
