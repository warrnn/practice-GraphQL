import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    type Query {
        hello: String
        greeting: String
    }
`;

const resolvers = {
	Query: {
		hello: () => {
			return "Hello World";
		},
		greeting: () => {
			return "Hello There";
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
