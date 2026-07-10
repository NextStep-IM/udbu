import Fastify from 'fastify'
import testRoute from './routes/test_routes.ts'

const fastify = Fastify({
    logger: true,
})

fastify.register(testRoute)

//fastify.get('/', function (request, reply) {
//    reply.send({ hello: 'world' })
//})

const start = async () => {
    try {
        await fastify.listen({ port: 5000 })
    }
    catch (err) {

        fastify.log.error(err)
        process.exit(1)
    }
}
start()
console.log('Server might or might not start :)')