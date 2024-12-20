from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    MONGODB_URI: str
    REDIS_URI: str
    AWS_ACCESS_KEY: str
    AWS_SECRET_KEY: str
    S3_BUCKET: str
    JWT_SECRET: str
    CORS_ORIGINS: list[str] = ["http://localhost:3000"]

    class Config:
        env_file = ".env"

settings = Settings()