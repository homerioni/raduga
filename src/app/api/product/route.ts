import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id') || '';

  const product = await prisma.product.findUnique({ where: { id } });

  return NextResponse.json(product);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const product = await prisma.product.create({ data });

  return NextResponse.json({ product });
}
