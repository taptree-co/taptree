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

  fastify.get('/session/me', {
    handler: async (req: FastifyRequest, res: FastifyReply) => {
      req.log.info({ url: req.url, method: req.method }, '→ /session/me hit')
      const session = await req.server.authenticate(req, res);

      req.log.info({ userId: session?.user.id }, '↳ session loaded')
      
      return res.status(200).send({
        session,
      });
    },
  });
}
