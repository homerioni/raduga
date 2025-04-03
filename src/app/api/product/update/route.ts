import { NextRequest, NextResponse } from 'next/server';
import { Product } from '@prisma/client';
import { prisma } from '../../../../../prisma/prisma-client';

export async function POST(req: NextRequest) {
  const {
    id,
    createdAt,
    updateAt,
    categoryId,
    category,
    ...data
  }: Product & { category: unknown } = await req.json();

  const product = await prisma.product.update({
    where: { id },
    data,
  });

  return NextResponse.json(product);
}
