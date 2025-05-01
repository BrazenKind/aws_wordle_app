import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string
}

export async function GET(request: Request){

    return new Response("hello!", {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

}
