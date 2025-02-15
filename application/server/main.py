from fastapi import FastAPI
import strawberry
import uvicorn
from strawberry.asgi import GraphQL

app = FastAPI()
    
@strawberry.type
class Query:
    @strawberry.field
    def ping(self) -> str:
        print("Ping endpoint was called!");
        return "pong";

schema = strawberry.Schema(query=Query)
graphql_app = GraphQL(schema)

app.add_route("/graphql", graphql_app)

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
