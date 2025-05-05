import type { NextApiRequest, NextApiResponse } from 'next';
import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';

Amplify.configure(config);

type ResponseData = {
  message: string
}

export async function GET(request: Request){

    return new Response("hello!", {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

}
