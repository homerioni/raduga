'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import {
  AppShell,
  Burger,
  Button,
  ColorSchemeScript,
  Flex,
  MantineProvider,
  NavLink,
  Skeleton,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ModalsProvider } from '@mantine/modals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { adminRoutes } from '../../constants';
import '@mantine/core/styles.css';
import { SessionProvider, signOut, useSession } from 'next-auth/react';
import { AuthGuard } from '../../components/admin/AuthGuard/AuthGuard';

const queryClient = new QueryClient();

const LoginComponent = () => {
  const { data, status } = useSession();

  if (status === 'loading') {
    return (
      <Flex align="center" gap={16}>
        <Skeleton height={32} circle />
        <Skeleton width={80} height={36} />
      </Flex>
    );
  }

  return (
    <Flex align="center" gap={16}>
      <Text>{data?.user?.name}</Text>
      <Button onClick={() => signOut()}>Выйти</Button>
    </Flex>
  );
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  return (
    <>
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <SessionProvider>
        <AuthGuard>
          <QueryClientProvider client={queryClient}>
            <MantineProvider>
              <ModalsProvider>
                <AppShell
                  header={{ height: 50 }}
                  navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: { mobile: !opened },
                  }}
                  padding="md"
                >
                  <AppShell.Header>
                    <Flex align="center" justify="space-between" px={16}>
                      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                      <Title h={50} px={10} py={8} order={3}>
                        ADMIN PANEL v0.1
                      </Title>
                      <LoginComponent />
                    </Flex>
                  </AppShell.Header>

                  <AppShell.Navbar>
                    <NavLink
                      label="Товары"
                      href={adminRoutes.products}
                      active={pathname === adminRoutes.products}
                    />
                  </AppShell.Navbar>

                  <AppShell.Main>{children}</AppShell.Main>
                </AppShell>
              </ModalsProvider>
            </MantineProvider>
          </QueryClientProvider>
        </AuthGuard>
      </SessionProvider>
    </>
  );
}
