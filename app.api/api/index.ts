import fastify from '../src/index';

export default async function handler(req: any, res: any) {
  // Ensure the Fastify instance is booted
  await fastify.ready();

  // Let Fastify handle the incoming request/response pair
  fastify.server.emit('request', req, res);
}
