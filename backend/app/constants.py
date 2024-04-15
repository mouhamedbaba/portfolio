import os


DEBUG = True


if DEBUG:
    DB = 'sqlite:///mydatabase.db'
else :
    DB = f'postgresql://postgres:{os.getenv('PG_PASSWORD')}@roundhouse.proxy.rlwy.net:52857/railway'