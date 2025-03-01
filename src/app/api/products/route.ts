import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get('search') || undefined;
  const category = req.nextUrl.searchParams.get('category');
  const stock = req.nextUrl.searchParams.get('stock');

  const categoryId = category !== null ? +category : undefined;
  const isStock = stock === 'true' || stock === 'false' ? false : undefined;

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: search,
        mode: 'insensitive',
      },
      category: {
        id: categoryId,
      },
      stock: isStock,
    },
    take: 20,
  });

  return NextResponse.json(products);
}
