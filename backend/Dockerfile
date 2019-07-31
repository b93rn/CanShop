# First stage of multi-stage build
FROM microsoft/dotnet:2.2-sdk AS build-env

# WORKDIR /

# COPY backend.csproj ./
# COPY backend.sln ./
COPY ./  ./src/
# COPY test/ ./test/

ENV ASPNETCORE_ENVIRONMENT=Production

RUN dotnet restore ./src/backend.csproj
# RUN dotnet test test/**/*.csproj
# RUN dotnet build -c Release
RUN dotnet publish -c Release ./src/ -o /app/out

# Second stage - Build runtime image
FROM microsoft/dotnet:2.2-aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "backend.dll"]