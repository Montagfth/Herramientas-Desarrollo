# ===============================
# Stage 1: Build with Maven + OpenJDK 21
# ===============================
FROM maven:3.9-eclipse-temurin-21-alpine AS build
WORKDIR /app

# Cache dependencies first
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source and build
COPY src ./src
RUN mvn clean package -DskipTests -B

# ===============================
# Stage 2: Runtime with OpenJDK 21 Alpine (JRE)
# ===============================
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=build /app/target/*.jar app.jar

# Healthcheck dependency for docker-compose (optional)
RUN apk add --no-cache curl

RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 8080

ENV SERVER_PORT=8080
ENV SPRING_PROFILES_ACTIVE=docker

ENTRYPOINT ["java", "-jar", "app.jar"]
