import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export async function coreRoutes(fastify: FastifyInstance) {
  fastify.get('/', {
    handler: async (req: FastifyRequest, res: FastifyReply) => {
      return res.status(200).send({
        message: 'Welcome to the Linky API',
      });
    },
  });

  fastify.get('/ping', {
    handler: async (req: FastifyRequest, res: FastifyReply) => {
      return res.status(200).send({
        ping: 'pong',
      });
    },
  });

  // In core.ts
fastify.get('/session/me', {
  handler: async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const session = await req.server.authenticate(req, res);
      
      if (!session) {
        return res.status(401).send({
          error: 'Unauthorized',
          session: null
        });
      }
      
      return res.status(200).send({
        session,
      });
    } catch (error) {
      console.error('Session authentication error:', error);
      return res.status(401).send({
        error: 'Unauthorized',
        session: null
      });
    }
  },
});
}
