# Product-Management Service

The backend is a Java Spring project, built using Maven. Ensure the Java version is Java 11.

## Category Service

`/categories` returns all the categories

## Product Service

`/products` returns all the products

`/products/{productId}` returns a single product for the given Id, if it exists

## Running

To run the backend services, run

```bash
cd backend
mvn spring-boot:run
```

It should be running at [http://localhost:8080](http://localhost:8080).

## Testing

To run tests using the command line, run

```bash
mvn test
```
