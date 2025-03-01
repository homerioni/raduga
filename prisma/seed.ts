import { hashSync } from 'bcrypt';
import * as process from 'node:process';
import { prisma } from './prisma-client';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        name: 'User1',
        email: 'user1@example.com',
        password: hashSync('1111', 10),
        role: 'USER',
      },
      {
        name: 'User2',
        email: 'user2@example.com',
        password: hashSync('1111', 10),
        role: 'ADMIN',
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
