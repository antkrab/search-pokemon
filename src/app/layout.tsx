'use client';

import './globals.css';
import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from '@/graphql/client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = getApolloClient();

  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
        <ApolloProvider client={client}>
          <main className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-gray-200">
              <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-600 tracking-tight drop-shadow-sm">
                Pokémon Search
              </h1>
              {children}
            </div>
          </main>
        </ApolloProvider>
      </body>
    </html>
  );
}
