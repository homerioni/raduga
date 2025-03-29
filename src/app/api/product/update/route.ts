import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';
import { Product } from '@prisma/client';

export async function POST(req: NextRequest) {
  const { id, ...data }: Product = await req.json();

  const product = await prisma.product.update({
    where: { id },
    data,
  });

  return NextResponse.json(product);
}
