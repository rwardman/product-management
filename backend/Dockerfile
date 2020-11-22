
FROM maven:3.6.3-jdk-11 AS MAVEN_BUILD

COPY ./ ./
RUN mvn clean package

FROM openjdk:11-jre-slim

COPY --from=MAVEN_BUILD /target/backend-0.0.1-SNAPSHOT.jar /backend.jar

ADD src/main/resources/categories.csv src/main/resources/categories.csv
ADD src/main/resources/products.csv src/main/resources/products.csv

CMD ["java", "-jar", "/backend.jar"]