import './globals.css';

export const metadata = {
  title: 'Honey Provisions',
  description: 'Minimalist product formulation consultancy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
