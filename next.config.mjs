/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- ESTA LÍNEA ES LA MÁS IMPORTANTE
  images: {
    unoptimized: true, // Necesario para que las imágenes carguen en GoDaddy
  },
};

export default nextConfig;