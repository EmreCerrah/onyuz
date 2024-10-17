// src/app/layout.js
export const metadata = {
  title: 'Strix',
  description: 'Oyun Fiyat Kıyasla',
};


export default function RootLayout({ children }) {
  return (
    <body>{children}</body>
  );
}
