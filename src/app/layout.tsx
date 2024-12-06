// html raiz
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // def retorno
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
