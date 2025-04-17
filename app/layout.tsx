export const metadata = {
    title: 'Task API',
    description: 'Simple Task Manager API with Next.js',
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  