/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    MONGODB_URI:"mongodb+srv://doctor-patient:DIoUNu6yaLeRQKZH@cluster0.pwdn1ap.mongodb.net/?retryWrites=true&w=majority",
    DB_NAME:"doctor-patient",// DIoUNu6yaLeRQKZH
  },
  reactStrictMode: true,
}

module.exports = nextConfig
